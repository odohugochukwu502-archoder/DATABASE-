const express = require("express")
const mongoose = require('mongoose');


const compass_string = "mongodb://localhost:27017/cohort8_db"

const atlast_string = "mongodb+srv://odohugochukwu502_db_user:<ugochukwu502#>@cluster0.2tgvh4f.mongodb.net/cohort8_db?appName=Cluster0"

mongoose.connect("mongodb://localhost:27017/cohort8_db")
    .then(() => console.log("mongoDB connected "))
    .catch(err => console.error("connection Error: ", err));

    
const app = express()
    const port = 5555


app.use(express.json())

app.get("/", (req, res)=>{
    res.send("server is active")
})

app.listen(port, () => {
    console.log('server is up and running on port:{port}')
})



