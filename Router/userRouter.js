const { Educator_info } = require('../Models/Educator_info');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
const {Student}=require('../Models/Student');


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
                userId: user.id
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
                id:user._id
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



//When User hit add description button, this request is called
router.post('/teacher/announcement', async (req, res) => {
    try {
        // Getting the data and validating it
        const data = {
            subject: req.body.subject,
            description: req.body.description,
            _id: req.body._id
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
             {  $push: {
                subject: data.subject,
                description:data.description
            } }
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
            data: {
                subject:updatedUser.subject,
                description:updatedUser.description
            } // This will contain the updated user object
        });
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
});



//Number of Students under that teacher ......GET API
router.get('/student/read', async (req, res) => {
    try {
        // const id = req.body.id; // Get the id from request parameters
         const student = await Student.find();
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.json(student);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});













module.exports = router;