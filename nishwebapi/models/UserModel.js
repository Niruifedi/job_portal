const mongoose = require("mongoose")


const UserSchema = new mongoose.Schema({
    firstnmae: {
        type:"String",
        required:true
    },

    surname: {
        type:"String",
        required:true
    },

    dateofbirth: {
        type: "String",
        required:true
    },

    sex: {
        type: "String",
        required:true
    },

    username: {
        type:"String",
        required:true
    },

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
module.exports = usermodel
