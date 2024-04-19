const jwt = require('jsonwebtoken');
const verifyToken = (req, res, next) => {
    // Get token from request headers
    const tokenget = req.headers.authorization;
    const id=req.headers.id;
    const secret=process.env.secret
    //console.log('---------', secret, id, tokenget)

    // const token = jwt.sign(
    //     {
    //         userId: id
    //     },
    //     secret,
    //     { expiresIn: '1h' }
    // );


    // Check if token exists
    // if (!token) {
    //     return res.status(401).send({
    //         success: false,
    //         message: 'Access denied. Token is missing.'
    //     });
    // }

    try {
        // Verify token
        // const decoded = jwt.verify(tokenget,{
        //     userId: id
        // },process.env.secret);

        const decoded = jwt.verify(tokenget, process.env.secret);

        //console.log(decoded)
        // Add decoded user data to request object
        req.user = decoded;
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        return res.status(403).send({
            success: false,
            message: error.message,
            status:502

        });
    }
};

module.exports=verifyToken;