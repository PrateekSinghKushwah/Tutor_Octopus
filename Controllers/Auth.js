// Import necessary modules
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {Educator_info} = require('../Models/Educator_info.js'); // Import your Educator_info model
const nodemailer = require('nodemailer');

// Define the controller function for the login route

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'pankajsoni93444@gmail.com', // Your Gmail account
        pass: 'crqd ypbg ybyw vzfs' // Your Gmail password
    }
});

exports.loginController = async (req, res) => {
    console.log("helo")
    try {
        // Find the user in the database by email
        const user = await Educator_info.findOne({ email: req.body.email });
        console.log()
        // Retrieve the secret from environment variables
        const secret = process.env.secret;

        // If the user does not exist, return an error response
        if (!user) {
            return res.status(200).send({
                success: false,
                message: 'Invalid email or password'
            });
        }

        // Securely compare passwords
        const passwordMatch = bcrypt.compareSync(req.body.password, user.passwordHash);

        // If passwords do not match, return an error response
        if (!passwordMatch) {
            return res.status(200).send({
                success: false,
                message: 'Invalid email or password'
            });
        }

        // If passwords match, generate a JWT token
        const token = jwt.sign(
            {
                userId: user._id
            },
            secret,
            { expiresIn: '1h' }
        );

        // Return a success response with user details and token
        return res.status(200).send({
            success: true,
            message: "Login successful",
            data: {
                user: user.email,
                token: token,
                firstName: user.firstName,
                lastName: user.lastName,
                role: user.businessType,
                id: user._id,
                batch:user.batch
            }
        });
    } catch (error) {
        // If an error occurs during the process, return a server error response
        console.error("Error during login:", error);
        res.status(500).send({
            success: false,
            message: "An error occurred during login"
        });
    }
};

exports.signupController=async (req, res) => {

    //getting the data and validating it.
    let data = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        passwordHash: bcrypt.hashSync(req.body.password, 10),
        password:req.body.password,
        businessName: req.body.businessName,
        businessType: req.body.businessType
    }
    //looping over the data so as to validate it.
    //
    console.log(data.passwordHash);
    if(data.password.length<6 || data.password.length>10){
        return res.status(200).send({
            success: false,
            message: "Password length should be between 6 to 10",
        });
    }
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
}

exports.passwordChange= async (req, res) => {
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
}
