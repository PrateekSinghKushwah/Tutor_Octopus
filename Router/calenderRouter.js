const { Calender } = require('../Models/Calender');
const express = require('express');
const router = express.Router();





router.post('/event/add', async (req ,res) => {
    // const user = await Educator_info.findOne({ email: req.body.email })
    try{
        let data={
            eventTitle:req.body.title,
            time:req.body.time,
            description:req.body.eventDescription,
            managedBy:req.body.managedBy
        }
        //console.log(data);
        // for (const [key, value] of Object.entries(data)) {
        //    // console.log(key);


        //    const array=['notes','batch','lessonCategory','lessonLength','smsCapableParent','smsCapable']

        //    if(!array.includes(key)){
        //     if (value.length === 0) {
        //         return res.status(200).send({
        //             success: false,
        //             message: key + "  is missing"
        //         })
        //     }

        //    }
           
           
    
        //     var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        //     if (key === "email" && !emailRegex.test(data.email)) {
        //         return res.status(200).send({
        //             success: false,
        //             message: key + "  is not valid"
        //         })
        //     }
        //     if (key === "email") {
        //         let query = await Student.findOne({ email: data.email,managedBy:data.managedBy });
        //         if (query) {
        //             return res.send({
        //                 success: false,
        //                 message: key + " Already exist"
        //             })
    
        //         }
    
        //     }
            
        //     //     if(value.length!=10){
        //     //         return res.status(200).send({
        //     //             success:false,
        //     //             message:"Mobile number is not valid"
        //     //         })
        //     //     }
        //     // }
    
        //     //if more data_validation is needed . we can add here
        // }
       
        let event=new Calender(data);
        event=await event.save();
    
        res.status(200).send({
            success:true,
            message:"Added event",
        });

    }catch(err){
        res.status(500).send({
            success: false,
            message: "Error occurred while adding event",
            error: err.message
        });
    }
   

})



router.get('/event/read', async (req, res) => {
    try {
         const id = req.query.id; // Get the id from request parameters
         const event = await Calender.find({managedBy:id});
        if (!event) {
            return res.status(404).send({ message: "There is no event in your calender",
        
        });
        }
        //  const studentData = Calender.map(event => ({
        //     firstName: student.firstName,
        //     lastName: student.lastName,
        //     email: student.email,
        //     batch: student.batch,
        //     id:student._id 
        // }));
        res.send({
            success:true,
            data:event
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});






module.exports=router;


