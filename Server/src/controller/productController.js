const {  getProductServices } = require("../services/productSv")


module.exports = {
    getProduct: async (req, res) => {
        let result = await getProductServices()
        return res.status(200).json({
            data: result
        })
    }
}