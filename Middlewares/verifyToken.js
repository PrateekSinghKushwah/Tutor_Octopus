const jwt = require('jsonwebtoken');
const Token=require('../Models/Token');
const verifyToken = async (req, res, next) => {
    
    const tokenget = req.headers.authorization;
    const id=req.headers.id;
    const secret=process.env.secret
    

    try {
       

        // const existingToken = await Token.findOne({ token });

        // if (existingToken) {
        //     return res.status(401).json({ success: false, message: 'Access denied. Token is invalid' });
        // }

        const decoded = jwt.verify(tokenget, process.env.secret);

       
        req.user = decoded;
        next(); 
    } catch (error) {
        return res.status(403).send({
            success: false,
            message: error.message,
            status:502

        });
    }
};

module.exports=verifyToken;