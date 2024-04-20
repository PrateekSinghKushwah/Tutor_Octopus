
const mongoose = require('mongoose')
require('dotenv/config');

const connectDB = async () => {
    
        const Connection_String=process.env.db_Conn;
        mongoose.connect(Connection_String).then(()=>{
            console.log("Connected to database")
        }).catch((err)=>{
            console.log(err);
        })
       
   
}

module.exports = { connectDB }