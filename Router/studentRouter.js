const { Student } = require('../Models/Student');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/student/add', async (req ,res) => {
    // const user = await Educator_info.findOne({ email: req.body.email })
    try{
        let data={
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            mobileNumber:req.body.mobileNumber,
            smsCapable:req.body.smsCapable,
            gender:req.body.gender,
            dob:req.body.dob,
            studentStatus:req.body.studentStatus,
            //studentType:req.body.studentType,
            familyType:req.body.familyType,
            firstNameParent:req.body.firstNameParent,
            lastNameParent:req.body.lastNameParent,
            lessonLength:req.body.lessonLength,
            emailParent:req.body.emailParent,
            mobileNumberParent:req.body.mobileNumberParent,
            smsCapableParent:req.body.smsCapableParent,
            preference:req.body.preference,
            lessonCategory:req.body.lessonCategory,
            billing:req.body.billing,
            price:req.body. price,
            notes:req.body.notes,
        }
        //console.log(data);
        for (const [key, value] of Object.entries(data)) {
           // console.log(key);
            if (value.length === 0) {
                return res.status(505).send({
                    success: false,
                    message: key + "  is missing"
                })
            }
    
            var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (key === "email" && !emailRegex.test(data.email)) {
                return res.send({
                    success: false,
                    message: key + "  is not valid"
                })
            }
            if (key === "email") {
                let query = await Student.findOne({ email: data.email });
                if (query) {
                    return res.send({
                        success: false,
                        message: key + " Already exist"
                    })
    
                }
    
            }
            if(key==="mobileNumber"|| key==="mobileNumberParent"){
                if(value.length!=10){
                    return res.send({
                        success:false,
                        message:"Mobile number is not valid"
                    })
                }
            }
    
            //if more data_validation is needed . we can add here
        }
        //add more data validation as per required
    
        let student=new Student(data);
        student=await student.save();
    
        res.status(200).send({
            success:true,
            message:"Added student successfully",
            data:{
                name:data.firstName+" "+data.lastName
            }
        });

    }catch(err){
        res.status(500).send({
            success: false,
            message: "Error occurred while adding student",
            error: err.message
        });
    }
   

})
module.exports=router;