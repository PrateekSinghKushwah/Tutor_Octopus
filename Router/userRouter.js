const { Educator_info } = require('../Models/Educator_info');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
const { Student } = require('../Models/Student');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');


// {firstName: 'PANKAJ', lastName: 'SONI', email: 'pankajsoni93444@gmai', password: '1234', businessName: 'Lets_learn', …}
router.post('/login', async (req, res) => {
    try {
        const user = await Educator_info.findOne({ email: req.body.email });
        const secret = process.env.secret;

        if (!user) {
            return res.status(200).send({
                success: false,
                message: 'Invalid email or password'
            });
        }

        // Log the password comparison for debugging (do not log passwords in production)
        console.log("Password Hash from DB:", user.passwordHash);
        console.log("Password Comparison:", bcrypt.compareSync(req.body.password, user.passwordHash));
        console.log("Input Password Hash:", bcrypt.hashSync(req.body.password, 10));
        console.log("---------", user);
        // Securely compare passwords
        const passwordMatch = bcrypt.compareSync(req.body.password, user.passwordHash);

        if (!passwordMatch) {
            return res.status(200).send({
                success: false,
                message: 'Invalid email or password'
            });
        }

        const token = jwt.sign(
            {
                userId: user._id
            },
            secret,
            { expiresIn: '1h' }
        );

        res.status(200).send({
            success: true,
            message: "Login successful",
            data: {
                user: user.email,
                token: token,
                firstName: user.firstName,
                lastName: user.lastName,
                role: user.businessType,
                id: user._id
            }
        });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).send({
            success: false,
            message: "An error occurred during login"
        });
    }
});




//****when user hits register button, this api is called***
//*REGISTER_API
router.post('/register', async (req, res) => {

    //getting the data and validating it.
    let data = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        passwordHash: bcrypt.hashSync(req.body.password, 10),
        businessName: req.body.businessName,
        businessType: req.body.businessType
    }
    //looping over the data so as to validate it.
    //
    console.log(data.passwordHash);
    for (const [key, value] of Object.entries(data)) {
        console.log(key);
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
            let query = await Educator_info.findOne({ email: data.email });
            if (query) {
                return res.send({
                    success: false,
                    message: key + "Already exist"
                })

            }

        }

        //if more data_validation is needed . we can add here
    }
    //console.log(data);

    let user = new Educator_info(data)
    user = await user.save();

    // if (!user)
    //     return res.status(400).send('the user cannot be created!')

    return res.status(200).send({
        success: true,
        message: "User added successfully",
        data: {
            name: user.firstName,
            businessName: user.businessType
        }
    });
})





const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'pankajsoni93444@gmail.com', // Your Gmail account
        pass: 'crqd ypbg ybyw vzfs' // Your Gmail password
    }
});


router.post('/user/forgetPassword/sendOTP', (req, res) => {
    const { email } = req.body;

    // Generate OTP (you need to implement this part)
    const otp = Math.floor(Math.random() * 9000) + 1000;

    // Send email with OTP
    const mailOptions = {
        from: 'pankajsoni93444@gmail.com',
        to: email,
        subject: 'Your OTP FOR PASSWORD CORRECTION',
        text: `Your OTP is: ${otp}` // Replace with the actual OTP
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error:', error);
            return res.status(500).json({ success: false, message: 'Failed to send OTP' });
        }
        else {
            console.log('Email sent:', info.response);
            return res.send({ success: true, message: 'OTP sent successfully', data: otp });
        }
    });
});














//When User hit add description button, this request is called
router.post('/teacher/announcement', async (req, res) => {
    try {
        // Getting the data and validating it
        const data = {
            subject: req.body.subject,
            description: req.body.description,
            _id: req.body._id,
            batch: req.body.batch
        };

        // Validating data
        for (const key in data) {
            if (!data[key]) {
                return res.status(400).json({
                    success: false,
                    message: `${key} is missing`
                });
            }
        }


        // Update the announcement in the database
        const updatedUser = await Educator_info.findOneAndUpdate({ _id: data._id },
            {
                $push: {
                    announcement: {
                        batch: data.batch,
                        subject: data.subject,
                        description: data.description
                    }
                },
            }
        );

        if (updatedUser.nModified === 0) {
            return res.status(404).json({
                success: false,
                message: "User not found or announcement not updated"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Announcement updated successfully",
            // data: {
            //     subject:updatedUser.subject,
            //     description:updatedUser.description
            // } // This will contain the updated user object
        });
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
});



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
router.get('/announcement/read', async (req, res) => {
    try {
        const data = {
            id: req.query.id,
            // batch:req.query.batch

        }

        // Retrieve id from query string


        // console.log(id);
        // console.log("check-2");

        if (!data.id) {
            return res.status(400).json({ message: "ID is required in the query parameters" });
        }

        const teacher = await Educator_info.findById(data.id);

        if (!teacher) {
            return res.status(404).json({ message: " no data is found" });
        }

        const { announcement } = teacher;
        // const requiredData=announcement.filter(item=>item.batch===data.batch);




        // Extract subject and description fields from the data
        // const { subject, description } = data;


        res.status(200).send({
            success: true,
            data: announcement
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});



router.put('/passwordChange', async (req, res) => {
    try {
        const { userId, password } = req.body;

        // Check if userId and password are provided
        // if (!userId || !password) {
        //     return res.status(400).json({ success: false, message: 'User ID and password are required' });
        // }

        // Hash the new password
        const hashedPassword =  bcrypt.hashSync(password, 10)

        // Update the password in the database
        const updatedUser = await Educator_info.findOneAndUpdate(
            { email: userId }, // Query: Find user with the specified email
            { $set: { passwordHash: hashedPassword } }, // Update: Set the password field to the hashedPassword value
            { new: true } // Options: Return the updated document
        );
        


        if (!updatedUser) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        res.status(200).json({ success: true, message: 'Password updated successfully',data:updatedUser });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});








module.exports = router;