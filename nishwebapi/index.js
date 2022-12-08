const express = require("express");
const bodyparser = require("body-parser")
const mongoose = require("mongoose")
require ("dotenv")
const { restart } = require("nodemon");
const multer = require("multer");

// importing user defined model
const usermodel = require("./models/UserModel")
const companymodel = require("./models/CompanyModel")
const jobsmodel = require("./models/JobsModel")
const applicationmodel = require("./models/JobApplication")

const app = express()
const PORT = 3000;


const diskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./uploaded");
    },
    filename: (req, file, cb) => {
      // const ext = file.mimetype.split("/")[1];
      const ext = file.originalname.split(".")[1];
  
      cb(null, Date.now() + "." + ext);
    },
  });
  
  const upload = multer({
    storage: diskStorage,
  });

app.use(bodyparser.urlencoded({
    extended:true
}))

app.use(bodyparser.json({
    limit:"50mb"

}))


app.post("/signup", async(req, res)=>{

    // res.json({msg:"testing the signup input"})
    let userName = req.body.username
    let password = req.body.password
    let surName = req.body.surname
    let firstName = req.body.firstname
    let dateofbirth = req.body.dateofbirth
    let sex = req.body.sex
    let email = req.body.email
    let phoneNumber = req.body.phonenumber

     if ((userName === 0 || userName === undefined)  
     && (password === 0 || password === undefined) 
     && (surName === 0 || surName === undefined) 
     && (firstName === 0 || firstName === undefined) 
     && (dateofbirth === 0 || dateofbirth === undefined)
     && (sex === 0 || sex === undefined)
     && (email === 0 || email === undefined) 
     && (phoneNumber === 0 || phoneNumber === undefined))
    {
        res.json({msg:"Please provide values for the required fields"})
    }
    else
    {
        const userdetails = {
            firstnmae: firstName,
            surname: surName,
            dateofbirth: dateofbirth,
            sex: sex,
            username: userName,
            password: password,
            email: email,
            phonenumber: phoneNumber

        }
        // res.json({userdetails})
        // res.json({msg: "Registration successful"})
        let newuser = await new usermodel(userdetails)
        newuser.save((error, success)=>{
            if (!error){
                res.json({success})
            }
            else
            {
                res.json({error})
            }
        })
    }

})

mongoose.connect("mongodb://127.0.0.1:27017/nishproject", (error)=>{
    if (error)
    {
        console.log(error);
    }
    else
    {
        console.log("DataBase connection successful");
    }
})


app.post("/login", async(req, res)=>{
    let username = req.body.username
    let password = req.body.password

   try {

    let user = await usermodel.findOne({username:username})
    let dbusername = user.username
    let dbpassword = user.password
    if (user !== null)
    {
        if(password !== dbpassword){
            res.json({msg: "Incorrect username/password"})
        }
        else
        {
            res.json({msg:`You are logged in as ${dbusername}`})
        }
    }
   
    
   } catch (error) {
    res.json({msg: "User does not exist"})

   }
})


app.post("/company", (req, res)=>{
    let company_name = req.body.company_name
    let companydescription = req.body.companydescription
    let phone = req.body.phone
    let image = req.body.image
    let type = req.body.type
    let location = req.body.location
    let website = req.body.website

    if ((company_name === 0 || company_name === undefined) && 
        (companydescription === 0 || companydescription === undefined) && 
        (phone === 0 || companydescription === undefined) && 
        (image === 0 || image === undefined) &&
        (type === 0 || type === undefined) && 
        (location === 0 || location === undefined) && 
        (website === 0 || website === undefined) ) {
        
            res.json({msg:"Provide the required field"})
    }
    else
    {
        const companydetail = {
            company_name:company_name, 
            companydescription:companydescription,
            phone:phone,
            image:image,
            type:type,
            location:location,
            website:website
        }
        // console.log(companydetail);
        let newcompany = new companymodel(companydetail)
        newcompany.save((error, success)=>{
            if (error){
                res.json(error);
            
            }
            else
            {
                res.json(success);
            }
        }) 

    }

}) 


app.post("/createjob", (req, res)=>{
    let job_title = req.body.job_title
    let job_description = req.body.job_description
    let amount = req.body.amount
    let date = req.body.date
    let company_name = req.body.company_name

    if ((job_title === 0 || job_title === undefined) && 
        (job_description === 0 || job_description === undefined) && 
        (amount === 0 || amount === undefined) && 
        (date === 0 || date === undefined) &&  
        (company_name === 0 || company_name === undefined) ) {

            res.json({msg:"Post a job"})

    }
    else
    {
        const jobdetails = {
            job_title:job_title,
            job_description:job_description,
            amount:amount,
            date:date,
            company_name:company_name
        }

        let newjob = new jobsmodel(jobdetails)
        newjob.save((error, created)=>{
            if (error){
                res.json(error);
            
            }
            else
            {
                res.json(created);
            }
        })
    }

      
})


app.post("/jobapplication", (req, res)=>{

    let job_id = req.body.job_id
    let applicant_name = req.body.applicant_name
    let date_of_application = req.body.date_of_application
    let company_name = req.body.company_name
    let job_type = req.body.job_type
    let applicant_cv = req.body.applicant_cv
    
    if ((job_id === 0 || job_id === undefined) && 
        (applicant_name === 0 || applicant_name === undefined) && 
        (date_of_application === 0 || date_of_application === undefined) && 
        (company_name === 0 || company_name === undefined) && 
        (job_type === 0 || job_type === undefined) && 
        (applicant_cv === 0 || applicant_cv === undefined) ) {
            
            
            res.json({msg:"Apply Job"})
        
        }
        else
        {
            
            const applicationdetails = {
                
                job_id:job_id,
                applicant_name:applicant_name,
                date_of_application:date_of_application,
                company_name:company_name,
                job_type:job_type,
                applicant_cv:applicant_cv
            
            }
            
            let newapplication = new applicationmodel(applicationdetails)
            newapplication.save((error, applied)=>{
                
                if (error){
                    res.json(error);
                }
                else
                {
                    res.json(applied);
                }
            })
        }
    
    })
    
    app.listen(
    PORT,
    () => console.log("it's alive on http://localhost:${PORT}" )
)
