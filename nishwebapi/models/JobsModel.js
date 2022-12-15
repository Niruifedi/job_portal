const mongoose = require("mongoose")

const JobsSchema = new mongoose.Schema({
    job_title:{
        type:"String",
        required:true

    },

    job_description:{
        type:"String",
        required:true
    },

    amount:{
        type:"String",
        required:true
    },

    date:{
        type:"String",
        required:true
    },

    company_name:{
        type:"String",
        required:true
    }
})

const jobsmodel = mongoose.model("jobs", JobsSchema)
module.exports = jobsmodel