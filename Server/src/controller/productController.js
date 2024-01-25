const path = require('path');

const {
    getProductServices,
    postSingleImageServices,
    postMultipleImageServices,
    createProductService,
    getProductByIdServices,
    createCustomerService,
    createOrderService,
    createUserService
} = require("../services/productSv")


module.exports = {
    loginAccount: async (req, res) => {
        return res.send("hellle")
    },
    getProductById: async (req, res) => {
        let id = req.params.id

        try {
            let result = await getProductByIdServices(id);
            return res.status(200).json({
                errorCode: 0,
                data: result,
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                errorCode: 1,
                message: "Error retrieving product",
            });
        }
    },
    getProduct: async (req, res) => {
        let result = await getProductServices(req.query)
        return res.status(200).json({
            EC: 0,
            data: result
        })
    },
    getImageProduct: (req, res) => {
        const imageName = req.params.imageName;
        const imagePath = path.join(__dirname, '../public/image', imageName);
        console.log(">>>>>>>> ", __dirname)
        res.sendFile(imagePath, (err) => {
            if (err) {
                res.status(404).send('Image not found');
            }
        });
    },
    // postSingleImage: async (req, res, keyImg) => {
    //     if (!req.files || Object.keys(req.files).length === 0) {
    //         return res.status(400).send("No files were uploaded.")
    //     } else {
    //         const img = req.files[keyImg]
    //         return result = await postSingleImageServices(img)
    //     }
    // },
    postMultipleProduct: async (req, res) => {
        let { name, description, stock, price, size, discount } = req.body
        let { thumbnailURL, imgDescription } = req.files
        let imgDescriptionUrl = [];
        let ProductData = {}

        console.log(size)
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).send("No files were uploaded.")
        }
        if (Array.isArray(thumbnailURL)) {
            return res.status(400).send("Thumbnails can only contain 1 photo.")
        }
        if (Array.isArray(imgDescription)) {
            let Descriptionimg = await postMultipleImageServices(imgDescription)
            let imgPaths = Descriptionimg.detail.map((img) => {
                return img.path
            });
            imgDescriptionUrl = imgDescriptionUrl.concat(imgPaths);
        } else {
            let Descriptionimg = await postSingleImageServices(imgDescription)
            imgDescriptionUrl = Descriptionimg.path
        }

        let ImgThumbnail = await postSingleImageServices(thumbnailURL)
        let ImgThumbnailUrl = ImgThumbnail.path

        let sizeValues = size.split(',');
        console.log(sizeValues)
        ProductData = {
            name,
            description,
            stock,
            price,
            discount,
            size: sizeValues,
            thumbnailURL: ImgThumbnailUrl,
            imgDescription: imgDescriptionUrl,
        }

        let products = await createProductService(ProductData);
        return res.status(200).json({
            EC: 0,
            data: products
        })
    },
    postCreateOrders: async (req, res) => {
        let { status, product_orders, nameCustome, address, email, phone } = req.body
        let Order = { status, product_orders, nameCustome, address, email, phone }
        let OrderData = await createOrderService(Order)
        return res.status(200).json({
            EC: 0,
            data: OrderData
        })
    },
    postCreateUser: async (req, res) => {
        let { name, password, account, address, email, phone } = req.body
        let User = { name, password, account, address, email, phone }
        let UserData = await createUserService(User)
        return res.status(200).json({
            EC: 0,
            data: UserData
        })
    }
}