const express = require("express")
const userRoute = express.Router();
const {createUser, getAllUsers, getSingleUser, updateUser, deleteUser} = require('../controller/usercontroller.js')

userRoute.post("/new-users", createUser)
userRoute.get("/all-users", getAllUsers)
userRoute.get("/get-one-users/:id", getSingleUser)
userRoute.delete("/deleteUser/:id", deleteUser)
userRoute.patch("/update-users/:id", updateUser)
userRoute.get("/login",loginUser)

module.exports = userRoute
//and port,and different routes are used to test the different endpoints in postman. The port is used to tell the server which port to listen to, and the different routes are used to tell the server which endpoint to listen to. The different routes are defined in the userRoutes.js file, and they are used to tell the server which function to call when a request is made to that endpoint.


// the different parts that are used in the postman are the app.use(users, userRoute) in the index.js file, the userRoute.post("/new-users", createUser) in the userRoutes.js file, and the createUser function in the userController.js file. The app.use(users, userRoute) is used to tell the server that any request that starts with /users should be handled by the userRoute. The userRoute.post("/new-users", createUser) is used to tell the server that any POST request that starts with /users/new-users should be handled by the createUser function. The createUser function is used to handle the logic of creating a new user in the database.