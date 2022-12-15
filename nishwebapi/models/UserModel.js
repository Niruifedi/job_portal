const mongoose = require("mongoose")


const UserSchema = new mongoose.Schema({
    firstnmae: {
        type:"String",
        required:true
    },

<<<<<<< HEAD
    lastname: {
=======
    surname: {
>>>>>>> f0c1a0115a86c42b1a1ddd5cd3d3e07c41a540f7
        type:"String",
        required:true
    },

<<<<<<< HEAD
    company: {
=======
    dateofbirth: {
>>>>>>> f0c1a0115a86c42b1a1ddd5cd3d3e07c41a540f7
        type: "String",
        required:true
    },

<<<<<<< HEAD
   
=======
    sex: {
        type: "String",
        required:true
    },

    username: {
        type:"String",
        required:true
    },

>>>>>>> f0c1a0115a86c42b1a1ddd5cd3d3e07c41a540f7
    password: {
        type:"String",
        required:true
    },

    email: {
        type:"String",
        required:true
    },

    phonenumber: {
        type:"String",
        required:true
    }

})

const usermodel = mongoose.model("users", UserSchema)
<<<<<<< HEAD
module.exports = usermodel
=======
module.exports = usermodel
>>>>>>> f0c1a0115a86c42b1a1ddd5cd3d3e07c41a540f7
