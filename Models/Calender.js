const mongoose=require('mongoose');
const express = require('express');
const router = express.Router();

const Calender=new mongoose.Schema({
    eventTitle: {
        type: String,   
    },
    time:{
        type:Date
    },
    description:
    {
        type:String,
    },
    date:{
        type:Date
    },
    managedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Educator_info"
    }
    


   

});

exports.Calender = mongoose.model('Calender', Calender);