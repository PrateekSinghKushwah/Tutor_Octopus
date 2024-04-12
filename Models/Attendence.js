const mongoose=require('mongoose');
// const { Educator_info } = require('./Educator_info');

// {firstName: 'PANKAJ', lastName: 'SONI', email: 'pankajsoni93444@gmai', password: '1234', businessName: 'Lets_learn', …}
const Student=new mongoose.Schema({
  
  
    attendenceStatus:[{
        date:{
            type:String
        },
        status:{
            type:Boolean
        }
    }],
   
    managedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Educator_info"
    }
    

   

});

exports.Student = mongoose.model('Student', Student);