const mongoose=require('mongoose');

// {firstName: 'PANKAJ', lastName: 'SONI', email: 'pankajsoni93444@gmai', password: '1234', businessName: 'Lets_learn', …}
const Student=new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    mobileNumber: {
        type: String,
        required: true,
    },
    smsCapable: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    dob: {
        type: String,
        required: true,
    },
    studentStatus:{
        type:String,
        required:true
    },
    studentType:{
        type:String,
        required:true
    },
    familyType:{
        type:String,
        required:true
    },
    firstNameParent:{
        type:String,
        required:true
    },
    lastNameParent:{
        type:String,
        required:true
    },
    emailParent:{
        type:String,
        required:true
    },
    mobileNumberParent:{
        type:String,
        required:true
    },
    smsCapableParent:{
        type:String,
        required:true
    },
    preference:{
        type:String,
        required:true
    },
    lessonCategory:{
        type:String,
        required:true
    },
    lessonLength:{
        type:String,
        required:true
    },
    billing:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    notes:{
        type:String,
    }
    

   

});

exports.Student = mongoose.model('Student', Student);