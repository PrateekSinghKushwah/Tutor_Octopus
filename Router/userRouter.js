const { Educator_info } = require('../Models/Educator_info');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
const { Student } = require('../Models/Student');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const { loginController, signupController, passwordChange }=require('../Controllers/Auth');
const { OtpController } = require('../Controllers/OTP');
const { createAnnoucement, readAnnoucement } = require('../Controllers/Announcement');


// {firstName: 'PANKAJ', lastName: 'SONI', email: 'pankajsoni93444@gmai', password: '1234', businessName: 'Lets_learn', …}
// router.post('/login', async (req, res) => {
//     try {
//         const user = await Educator_info.findOne({ email: req.body.email });
//         const secret = process.env.secret;

//         if (!user) {
//             return res.status(200).send({
//                 success: false,
//                 message: 'Invalid email or password'
//             });
//         }

//         // Log the password comparison for debugging (do not log passwords in production)
//         console.log("Password Hash from DB:", user.passwordHash);
//         console.log("Password Comparison:", bcrypt.compareSync(req.body.password, user.passwordHash));
//         console.log("Input Password Hash:", bcrypt.hashSync(req.body.password, 10));
//         console.log("---------", user);
//         // Securely compare passwords
//         const passwordMatch = bcrypt.compareSync(req.body.password, user.passwordHash);

//         if (!passwordMatch) {
//             return res.status(200).send({
//                 success: false,
//                 message: 'Invalid email or password'
//             });
//         }

//         const token = jwt.sign(
//             {
//                 userId: user._id
//             },
//             secret,
//             { expiresIn: '1h' }
//         );

//         res.status(200).send({
//             success: true,
//             message: "Login successful",
//             data: {
//                 user: user.email,
//                 token: token,
//                 firstName: user.firstName,
//                 lastName: user.lastName,
//                 role: user.businessType,
//                 id: user._id
//             }
//         });
//     } catch (error) {
//         console.error("Error during login:", error);
//         res.status(500).send({
//             success: false,
//             message: "An error occurred during login"
//         });
//     }
// });


router.post('/login',loginController)
// router.post('/login',)
//****when user hits register button, this api is called***
//*REGISTER_API
router.post('/register',signupController)

router.post('/user/forgetPassword/sendOTP',OtpController);
//When User hit add description button, this request is called
router.post('/teacher/announcement', createAnnoucement);
// //Number of Students under that teacher ......GET API
// router.get('/student/read', async (req, res) => {
//     try {
//          const id = req.query.id; // Get the id from request parameters
//          const student = await Student.find({managedBy:id});
//         if (!student) {
//             return res.status(404).json({ message: "Student not found" });
//         }
//          const studentData = student.map(student => ({
//             firstName: student.firstName,
//             lastName: student.lastName,
//             email: student.email,
//             batch: student.batch,
//             id:student._id 
//         }));

//         studentData.sort((a, b) => {
//             return a.firstName.localeCompare(b.firstName);
//         });
//         res.send({
//             success:true,
//             data:studentData
//         });
//     } catch (error) {
//         console.error("Error:", error);
//         res.status(500).json({ message: "Internal server error" });
//     }
// });





// //Number of Students under that teacher in a batch ......GET API
// router.get('/student/read/batch', async (req, res) => {
//     try {
//          const data = {
//             id:req.query.id,
//             batch:req.query.batch
//          }; // Get the id from request parameters
//          const student = await Student.find({managedBy:data.id,batch:data.batch});
//          console.log(student)
//         if (!student) {
//             return res.status(404).send({ success:false,message: "Student not found" });
//         }
//          const studentData = student.map(student => ({
//             firstName: student.firstName,
//             lastName: student.lastName,
//             email: student.email,
//             id:student._id,
//             attendenceStatus:student.attendenceStatus
//         }));

//         studentData.sort((a, b) => {
//             return a.firstName.localeCompare(b.firstName);
//         });
//         res.send({
//             success:true,
//             data:studentData
//         });
//     } catch (error) {
//         console.error("Error:", error);
//         res.status(500).json({ message: "Internal server error" });
//     }
// });



//changing the attendence-status








// router.put('/student/edit', async (req, res) => {
//     try {
//         // let data = {
//         //     email:req.body.email
//         // };
//         let data={
//             email:req.body.email,
//             newPrice:req.body.newPrice,
//             newBatch:req.body.newBatch,
//             newLesson:req.body.newLesson,
//             newMobileNumber:req.body.newMobileNumber,
//             id:req.body.id
//         }
//        // console.log(data); 
//         // Extract email from request body
//        // console.log(data);
//         // Find and delete the student based on email
//         const editedStudent = await Student.findOneAndUpdate({ email:data.email ,_id:data.id},
//             { $set: { price:data.newPrice,
//                 batch:data.newBatch,
//                 newLesson:data.newLesson,
//                 mobileNumber:data.newMobileNumber

//             }} 
//         );

//         if (!editedStudent) {
//             // If student not found
//             return res.status(404).send({
//                 success: false,
//                 message: "Student not found with the provided email."
//             });
//         }

//         // If student deleted successfully
//         res.status(200).send({
//             success: true,
//             message: "Student edited successfully.",
//         });
//     } catch (err) {
//         // If any error occurs
//         res.status(500).send({
//             success: false,
//             message: "Error occurred while deleting student.",
//             error: err.message
//         });
//     }
// });







//Number of Announcement under the teacher .....**GET_API**
router.get('/announcement/read', readAnnoucement);
router.put('/passwordChange',passwordChange);
module.exports = router;