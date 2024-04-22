const mongoose=require('mongoose');
const { Educator_info } = require('./Educator_info');

// {firstName: 'PANKAJ', lastName: 'SONI', email: 'pankajsoni93444@gmai', password: '1234', businessName: 'Lets_learn', …}
const Student=new mongoose.Schema({
    firstName: {
        type: String,
        
    },
    lastName: {
        type: String,
        
    },
    email: {
        type: String,
        
    },
    mobileNumber: {
        type: String,
        
    },
    smsCapable: {
        type: String,
        
    },
    batch: {
        type: String,
        
    },
    studentStatus:{
        type:String,
        
    },
    // studentType:{
    //     type:String,
    //    
    // },
    firstNameParent:{
        type:String,
       
    },
    lastNameParent:{
        type:String,
       
    },
    emailParent:{
        type:String,
       
    },
    mobileNumberParent:{
        type:String,
       
    },
    smsCapableParent:{
        type:String,
       
    },
    // preference:{
    //     type:String,
       
    // },
    emailReminder:{
        type:String,
    },
    smsReminder:{
        type:String
    },
    lessonCategory:{
        type:String,
       
    },
    lessonLength:{
        type:String,
       
    },
    billing:{
        type:String,
       
    },
    price:{
        type:String,  
    },
    notes:{
        type:String,
    },
    attendenceStatus:[{
        date:{
            type:String
        },
        status:{
            type:Boolean
        }
    }],

    presentDate: {
        type: [String],
        default: ["2024-04-14", "2024-04-13"]
    },

    allDate: {
        type: [String],
        default: ["2024-04-14", "2024-04-13"]
    },
    otp:{
        type:Number,
    },
    managedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Educator_info"
    }
    

   

});

exports.Student = mongoose.model('Student', Student);