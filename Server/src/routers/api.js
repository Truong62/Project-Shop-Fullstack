const express = require("express");

const {  getProduct } = require("../controller/productController")

const routerAPI = express.Router();

routerAPI.get("/product", getProduct)

module.exports = routerAPI;