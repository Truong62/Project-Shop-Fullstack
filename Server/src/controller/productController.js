const path = require('path');

const {
    getProductServices,
    postSingleImageServices,
    postMultipleImageServices,
    createProductService,
    getProductByIdServices
} = require("../services/productSv")


module.exports = {
    getProductById: async (req, res) =>{
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
        let { name, description, stock, price } = req.body
        let { thumbnailURL, imgDescription } = req.files
        let imgDescriptionUrl;
        let ProductData = {}

        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).send("No files were uploaded.")
        }
        if (Array.isArray(thumbnailURL)) {
            return res.status(400).send("Thumbnails can only contain 1 photo.")
        }
        if (Array.isArray(imgDescription)) {
            let Descriptionimg = await postMultipleImageServices(imgDescription)
            let imgPaths = Descriptionimg.detail.map(img => img.path);
            imgDescriptionUrl = imgPaths.join(',');
        } else {
            let Descriptionimg = await postSingleImageServices(imgDescription)
            imgDescriptionUrl = Descriptionimg.path
        }

        let ImgThumbnail = await postSingleImageServices(thumbnailURL)
        let ImgThumbnailUrl = ImgThumbnail.path

        ProductData = {
            name,
            description,
            stock,
            price,
            thumbnailURL: ImgThumbnailUrl,
            imgDescription: imgDescriptionUrl,
        }

        let products = await createProductService(ProductData);
        return res.status(200).json({
            EC: 0,
            data: products
        })
    },
}