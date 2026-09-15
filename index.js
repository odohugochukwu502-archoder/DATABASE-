//import "dotenv/config" // this is used to load environment variables from a .env file into process.env and is common js

require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const dns = require("dns");

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const userRoute = require("./routes/userRoutes.js");
const productRoute = require("./routes/productRoutes.js");

const compass_string = process.env.COMPASS_STRING;
const atlast_string = process.env.ATLAS_STRING;

mongoose.connect(atlast_string)
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
    });

const app = express();

const port = 5555;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("server is active");
});

app.use("/users", userRoute);
app.use("/products", productRoute);

app.listen(port, () => {
    console.log(`server is up and running on port:${port}`);
});



