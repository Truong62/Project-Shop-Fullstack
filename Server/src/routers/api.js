const express = require("express");
const isAuthenticated = require("../middlewares/isAuthenticated")

const {
    getProduct,
    postMultipleProduct,
    getImageProduct,
    getProductById,
    postCreateOrders,
    postCreateUser,
    loginAccount,
} = require("../controller/productController")

const routerAPI = express.Router();

routerAPI.post("/user", postCreateUser)
routerAPI.get("/products", getProduct)
routerAPI.post("/products", postMultipleProduct)
routerAPI.get("/products/image/:imageName", getImageProduct);
routerAPI.get("/products/id/:id", getProductById)
routerAPI.post("/order", postCreateOrders)
// routerAPI.post("/login", isAuthenticated(),loginAccount)

module.exports = routerAPI;