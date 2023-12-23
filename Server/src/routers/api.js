const express = require("express");

const {
    getProduct,
    postMultipleProduct,
    getImageProduct
} = require("../controller/productController")

const routerAPI = express.Router();

routerAPI.get("/products", getProduct)
routerAPI.get("/products/:imageName", getImageProduct);
routerAPI.post("/products", postMultipleProduct)

module.exports = routerAPI;