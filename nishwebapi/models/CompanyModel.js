const mongoose = require("mongoose")

const CompanySchema = new mongoose.Schema({
    
    company_name: {
        type:"String",
        required:true
    },

    companydescription: {
        type:"String",
        required:true
    },

    phone: {
        type:"String",
        required:true
    },

    image: {
        type:"String",
        required:true
    },

    type: {
        type:"String",
        required:true 
    },

    location: {
        type:"String",
        required:true

    },

    website: {
        type:"String",
        required:true
    }

})

const companymodel = mongoose.model("companies", CompanySchema)
module.exports = companymodel


