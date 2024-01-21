const express = require("express");
const isAuthenticated = require("../middlewares/isAuthenticated")

const {
    getListOrder,
    updateListOrder,
    deleteListOrder,
} = require("../controller/home.controller")

const routerAPI = express.Router();

routerAPI.get("/", getListOrder)
routerAPI.get("/update/:id", updateListOrder)
routerAPI.get("/delete/:id", deleteListOrder)

module.exports = routerAPI;