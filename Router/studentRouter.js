const { student, Student } = require('../Models/Student');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/student/add', async (req, res) => {
    // const user = await Educator_info.findOne({ email: req.body.email })
    try{
        let data={
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            mobileNumber:req.body.mobileNumber,
            smsCapable:req.body.smsCapable,
            gender:req.body. gender,
            dob:req.body.dob,
            studentStatus:req.body.studentStatus,
            studentType:req.body.studentType,
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
        console.log(data);
    
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