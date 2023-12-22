const express = require("express");
const cors = require('cors');
require("dotenv").config();
const router = require("./routers/api")
const configDB = require("./config/mongodbConfig");
const fileUpload = require("express-fileupload")

const app = express()
const port = 8000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(fileUpload())
app.use(cors());

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
