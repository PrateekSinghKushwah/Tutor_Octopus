const { Educator_info } = require('../Models/Educator_info');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;


// {firstName: 'PANKAJ', lastName: 'SONI', email: 'pankajsoni93444@gmai', password: '1234', businessName: 'Lets_learn', …}
router.post('/login', async (req, res) => {
    const user = await Educator_info.findOne({ email: req.body.email })
    const secret = process.env.secret;
    if (!user) {
        return res.status(200).send({
                success: false,
                message: 'The email is not valid'
            
        });
    }

    if (user && bcrypt.compareSync(req.body.password, user.passwordHash)) {
        const token = jwt.sign(
            {
                userId: user.id
            },
            secret,
            { expiresIn: '1h' }
        )

        res.status(200).send({
            data: {
                user: user.email,
                token: token,
                firstName: user.firstName,
                lastName: user.lastName,
                role:user.businessType

            },
            message: "Login successfull",
            success: true,

        })
    } else {
        res.status(200).send({
                
                    success:false,
                    message:"The password is not valid"
                
            
        });
    }


})



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
    console.log(data);
    for (const [key, value] of Object.entries(data)) {
        console.log(key);
        if (value.length === 0) {
            return res.send({
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

    res.status(200).send({
        success: true,
        message: "User added successfully",
        data: {
            name: user.firstName,
            businessName: user.businessName
        }
    });
})






module.exports = router;