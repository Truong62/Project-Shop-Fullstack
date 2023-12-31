const express = require("express");

const {
    getProduct,
    postMultipleProduct,
    getImageProduct,
    getProductById
} = require("../controller/productController")

const routerAPI = express.Router();

routerAPI.get("/products", getProduct)
routerAPI.post("/products", postMultipleProduct)
routerAPI.get("/products/image/:imageName", getImageProduct);
routerAPI.get("/products/id/:id", getProductById)

module.exports = routerAPI;