const express = require("express");
require("dotenv").config();
const router = require("./routers/api")
const configDB = require("./config/mongodbConfig");

const app = express()
const port = 8000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

(async () => {
    try {
        await configDB()
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`);
        });
    } catch (e) {
        console.log(e);
    }
})();
