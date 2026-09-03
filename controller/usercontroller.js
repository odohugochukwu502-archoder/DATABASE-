const userModel = require("./model/userModel.js")

/**
 * CRUD
 * CREATE USER (POST)
 * READ USER (GET): GENERAL GET< SINGLE GET
 * UPDATE USER (PUT)
 * DELETE USER (DELETE)
 */

//CREATE USER
export const createUser = async (req, res) => {
    try {
        const {name, email, password} = req.body
        const user = await userModel.create({
            name, email, password
        })
        return res.status(201).json({
            message: "User created successfully",
            data: user
        })
    } catch (error){
        return res.status(500).json({message: error.message})
    }
}


//GENERAL GET
export const getAllUsers = async (req, res) => {
    try { 
        const getAll = await userModel.find()
        return res.status(200).json({
            message: "All users fetched successfully",
            data: getAll
        })    
    }catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }

}
    

//SINGLE GET

export const getSingleUser = async (req, res) => {
    try {
        const {id} = req.params
        const getSingle = await userModel.findById(id)

        if (!getSingle) {
            return res.status(404).json({
                message: "User not found"
            })
        }
        return res.status(200).json({
            message: "User fetched successfully",
            data: getSingle
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }

}

//UPDATE USER
export const updateUser = async (req, res) => {
    try {
        const {id} = req.params
        const {name, email, password} = req.body
        const updatedUser = await userModel.findByIdAndUpdate(id, {
            name, email, password
        }, {new: true})
        return res.status(200).json({
            message: "User updated successfully",
            data: updatedUser
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}


//DELETE USER
export const deleteUser = async (req, res) => {
    try {
        const {userid} = req.params
        const deletedUser = await userModel.findByIdAndDelete(userid)
        return res.status(200).json({
            message: "User deleted successfully",
            data: deletedUser
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}