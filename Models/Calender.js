const mongoose=require('mongoose');
const express = require('express');
const router = express.Router();

const Calender=new mongoose.Schema({
    eventTitle: {
        type: String,   
    },
    time:{
        type:String
    },
    description:
    {
        type:String,
    },
    date:{
        type:String
    },
    managedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Educator_info"
    }
    


   

});

exports.Calender = mongoose.model('Calender', Calender);