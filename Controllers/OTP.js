const nodemailer=require('nodemailer');
const {Educator_info}=require('../Models/Educator_info')

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'pankajsoni93444@gmail.com', // Your Gmail account
        pass: 'crqd ypbg ybyw vzfs' // Your Gmail password
    }
});



exports.OtpController=async (req, res) => {
    const { email,subject } = req.body;

    // Generate OTP (you need to implement this part)
    const otp = Math.floor(Math.random() * 9000) + 1000;
    const user=Educator_info.findOneAndUpdate({email:email})


    // Send email with OTP
    const mailOptions = {
        from: 'pankajsoni93444@gmail.com',
        to: email,
        subject: subject,
        text: `Your OTP is: ${otp}` // Replace with the actual OTP
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error:', error);
            return res.status(500).json({ success: false, message: 'Failed to send OTP' });
        }
        else {
            console.log('Email sent:', info.response);
            return res.send({ success: true, message: 'OTP sent successfully',data:otp });
        }
    });
}