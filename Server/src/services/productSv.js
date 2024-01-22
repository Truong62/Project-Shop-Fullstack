const aqp = require("api-query-params");
const Product = require("../model/Product")
const Customer = require("../model/customers")
const Orders = require("../model/Orders")
const User = require("../model/User")
const path = require("path")
const bcrypt = require('bcrypt');

module.exports = {
    createUserService: async (data) => {
        try {
            const accountUser = await User.find({ account: data.account });
            if (accountUser.length > 0) {
                return res.status(400).json({ message: 'account exists' });
            }

            const hashedPassword = await bcrypt.hash(data.password, 10);

            let result = await User.create({
                name: data.name,
                password: hashedPassword,
                account: data.account,
                address: data.address,
                email: data.email,
                phone: data.phone,
            })
            return result

        } catch (error) {
            console.log(error)
        }
    },
    createCustomerService: async (data) => {
        try {
            if (Object.keys(data).length === 0 && data.constructor === Object) {
                return {
                    status: "failed",
                }
            } else {
                let result = await Customer.create({
                    name: data.nameCustome,
                    address: data.address,
                    email: data.email,
                    phone: data.phone,
                })
                return result
            }
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    },
    createOrderService: async (data) => {
        let result
        try {
            if (Object.keys(data).length === 0 && data.constructor === Object) {
                return {
                    status: "failed",
                }
            }
            const phoneCustome = await Customer.find({ phone: data.phone })
            // return phoneCustome
            if (phoneCustome.length > 0) {
                await Customer.updateOne({ _id: phoneCustome[0]._id }, { address: data.address});
                result = await Orders.create({
                    customer_id: phoneCustome[0]._id,
                    order_date: new Date(),
                    product_orders: data.product_orders.map(productOrder => ({
                        product_id: productOrder.product_id,
                        quantity: productOrder.quantity,
                        size: productOrder.size,
                    })),
                    status: data.status
                })
            } else {
                let customers = await module.exports.createCustomerService(data)
                result = await Orders.create({
                    customer_id: customers._id,
                    order_date: new Date(),
                    product_orders: data.product_orders.map(productOrder => ({
                        product_id: productOrder.product_id,
                        quantity: productOrder.quantity,
                        size: productOrder.size,
                    })),
                    status: data.status
                })
            }
            return result
        } catch (error) {
            console.log(error)
        }
    },
    getProductServices: async (data) => {
        const page = data.page
        const { filter, limit, population } = aqp(data)
        // console.log("population >>>",population)
        // console.log("filter >>>",filter)
        // console.log("limit >>>",limit)
        delete filter.page
        let offset = (page - 1) * limit

        result = await Product
            .find(filter)
            .populate(population)
            .skip(offset)
            .limit(limit)
            .exec();

        return result
    },
    postSingleImageServices: async (data) => {
        //__dirname auto to file root
        let uploadPath = path.resolve(__dirname, "../public/image") //C: ...../public/image

        let extName = path.extname(data.name) //get img e.g: .png, .jpg

        // let baseName = path.basename(data.name, extName) // name img

        // let finaName = `${baseName}-${Date.now()}${extName}` 
        let finaName = `${Date.now()}${extName}`

        let finalPath = `${uploadPath}/${finaName}`
        try {
            await data.mv(finalPath)
            return {
                status: "success",
                path: finaName,
                error: null
            }
        } catch (error) {
            return {
                status: "failed",
                path: null,
                error: JSON.stringify(error)
            }
        }
    },
    postMultipleImageServices: async (data) => { //dataArray
        try {
            let uploadPath = path.resolve(__dirname, "../public/image")//C: ...../public/image
            let resultArr = []
            let countSuccess = 0;
            for (let i = 0; i < data.length; i++) {
                let extName = path.extname(data[i].name)
                let finaName = `${Date.now()}${extName}`
                let finalPath = `${uploadPath}/${finaName}`
                try {
                    await data[i].mv(finalPath)
                    resultArr.push(
                        {
                            status: "success",
                            path: finaName,
                            fileName: data[i].name,
                            error: null
                        }
                    )
                    countSuccess++;
                } catch (error) {
                    resultArr.push(
                        {
                            status: "failed",
                            path: null,
                            fileName: data[i].name,
                            error: JSON.stringify(error)
                        }
                    )
                }
            }
            return {
                countSuccess: countSuccess,
                detail: resultArr
            }
        } catch (error) {
            console.log(error)
        }
    },
    createProductService: async (data) => {
        try {
            if (Object.keys(data).length === 0 && data.constructor === Object) {
                return {
                    status: "failed",
                }
            } else {
                let imgDescription = data.imgDescription;
                if (Array.isArray(imgDescription)) {
                    imgDescription = imgDescription.join(',');
                }
                let result = await Product.create({
                    name: data.name,
                    description: data.description,
                    stock: data.stock,
                    price: data.price,
                    thumbnailURL: data.thumbnailURL,
                    imgDescription: data.imgDescription,
                })
                return result
            }
        } catch (error) {
            console.log(error)
        }
    },
    getProductByIdServices: async (data) => {
        try {
            const product = await Product.findById(data);
            return product;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}