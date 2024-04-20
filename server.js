//importing all libraries , middlewares and files required
const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors=require('cors');
const userRouter=require('./Router/userRouter')
const studentRouter=require('./Router/studentRouter')
const calenderRouter=require('./Router/calenderRouter')
const bodyParser = require('body-parser');



//using libraries and middlewares

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
require('dotenv/config');
const Connection_String=process.env.db_Conn;
const port=process.env.port||8080;

//Connecting to mongoose database
mongoose.connect(Connection_String).then(()=>{
    console.log("Connected to database")
}).catch((err)=>{
    console.log(err);
})


//Routers
app.use(userRouter);
app.use(studentRouter);
app.use(calenderRouter);


//Connecting to server
app.listen(port,()=>{
    console.log('server is running on 8080-port ')

})