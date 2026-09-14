//import "dotenv/config" // this is used to load environment variables from a .env file into process.env and is common js

require("dotenv").config() // this is used to load environment variables from a .env file into process.env and is common js

const express = require("express") //this is the framework we are using to build our server and is common js
const mongoose = require('mongoose'); // moongoose is a library that allows us to interact with our mongoDB database and is common js
const userRoute = require("./routes/userRoutes.js")
const productRoute = require("./routes/productRoutes.js")
const compass_string = process.env.COMPASS_STRING
 // this is used to load environment variables from a .env file into process.env and is common js
 const atlast_string = process.env.ATLAST_STRING


const compass_string = "mongodb://localhost:27017/cohort8_db" // creating database name

const atlast_string = "mongodb+srv://odohugochukwu502_db_user:<ugochukwu502#>@cluster0.2tgvh4f.mongodb.net/cohort8_db?appName=Cluster0"// this my atlas string

mongoose.connect(atlast_string) // mongodb is used when we are working locally , while compass is online, connect our mongoos to our mongodb
    .then(() => console.log("mongoDB connected ")) // help us hhandle a succcessfull message
    .catch(err => console.error("connection Error: ", err));// handles error

    
const app = express()
    const port = 5555


app.use(express.json())

app.get("/", (req, res)=>{
    res.send("server is active")
})
app .use("/users", userRoute) // comes after the app.use(express.json()) because we want to parse the body of the request before we send it to the route handler
app.use("/products", productRoute) // comes after the app.use(express.json()) because we want to parse the body of the request before we send it to the route handler
app.listen(port, () => {
    console.log('server is up and running on port:{port}')
})



