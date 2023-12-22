const express = require("express");

const { 
    getProduct, 
    postMultipleProduct
 } = require("../controller/productController")

const routerAPI = express.Router();

routerAPI.get("/products", getProduct)
routerAPI.post("/products", postMultipleProduct)

module.exports = routerAPI;