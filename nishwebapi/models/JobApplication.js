const mongoose = require("mongoose")

const ApplicationSchema = new mongoose.Schema({
    
    job_id: {
        type:"String",
        required:true

    },

    applicant_name: {
        type:"String",
        required:true

    },

    date_of_application: {
        type:"String",
        required:true

    },

    company_name: {
        type:"String",
        required:true

    },

    job_type: {
        type:"String",
        required:true

    },

    applicant_cv: {
        type:"String",
        required:true
    }


})

const applicationmodel = mongoose.model("applications", ApplicationSchema)
module.exports = applicationmodel

