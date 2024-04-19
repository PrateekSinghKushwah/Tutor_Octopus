const jwt = require('jsonwebtoken');
const verifyToken = (req, res, next) => {
    
    const tokenget = req.headers.authorization;
    const id=req.headers.id;
    const secret=process.env.secret
    

    try {
       

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