const express = require("express");
const isAuthenticated = require("../middlewares/isAuthenticated")

const {
    getListOrder,
} = require("../controller/home.controller")

const routerAPI = express.Router();

routerAPI.get("/", getListOrder)

module.exports = routerAPI;