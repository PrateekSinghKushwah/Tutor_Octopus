const mongoose=require('mongoose');

// {firstName: 'PANKAJ', lastName: 'SONI', email: 'pankajsoni93444@gmai', password: '1234', businessName: 'Lets_learn', …}
const Educator_info=new mongoose.Schema({
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
    passwordHash: {
        type: String,
        required: true,
    },
    businessName: {
        type: String,
        required: true,
    },
    businessType: {
        type: String,
        required: true,
    },

    announcement:[{
        
        batch:{
            type:String
        },
        subject:{
            type:String
        },
        description:{
            type:String
        }
    }],
    
    quiz:[{
        
            question:{
                type:String
            },
            optionA:{
                type:String
            },
            optionB:{
                type:String
            },
            optionC:{
                type:String
            },
            optionD:{
                type:String
            },
            correct:{
                type:String
            }
        }],
    batch:{
        type:[String],
        required:true
    }  

});



exports.Educator_info = mongoose.model('Educator_info', Educator_info);