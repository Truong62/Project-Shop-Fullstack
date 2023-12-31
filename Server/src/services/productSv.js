const aqp = require("api-query-params");
const Product = require("../model/Product")
const path = require("path")

module.exports = {
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
    getProductByIdServices: async (data) =>{
        try {
            const product = await Product.findById(data);
            return product;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}