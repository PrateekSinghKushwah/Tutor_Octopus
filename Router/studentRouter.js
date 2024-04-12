const { Student } = require('../Models/Student');
const express = require('express');
const router = express.Router();


router.post('/student/add', async (req ,res) => {
    // const user = await Educator_info.findOne({ email: req.body.email })
    try{
        let data={
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            mobileNumber:req.body.mobileNumber,
            smsCapable:req.body.smsCapable,
            batch:req.body.batch,
            studentStatus:req.body.studentStatus,
            //studentType:req.body.studentType,
            // familyType:req.body.familyType,
            firstNameParent:req.body.firstNameParent,
            lastNameParent:req.body.lastNameParent,
            emailParent:req.body.emailParent,
            mobileNumberParent:req.body.mobileNumberParent,
            smsCapableParent:req.body.smsCapableParent,
            preference:req.body.preference,
            lessonCategory:req.body.lessonCategory,
            lessonLength:req.body.lessonLength,
            billing:req.body.billing,
            price:req.body. price,
            notes:req.body.notes,
            managedBy:req.body.managedBy
        }
        //console.log(data);
        for (const [key, value] of Object.entries(data)) {
           // console.log(key);


           const array=['notes','batch','lessonCategory','lessonLength','smsCapableParent','smsCapable']

           if(!array.includes(key)){
            if (value.length === 0) {
                return res.status(200).send({
                    success: false,
                    message: key + "  is missing"
                })
            }

           }
           
           
    
            var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (key === "email" && !emailRegex.test(data.email)) {
                return res.status(200).send({
                    success: false,
                    message: key + "  is not valid"
                })
            }
            if (key === "email") {
                let query = await Student.findOne({ email: data.email,managedBy:data.managedBy });
                if (query) {
                    return res.send({
                        success: false,
                        message: key + " Already exist"
                    })
    
                }
    
            }
            // if(key==="mobileNumber"|| key==="mobileNumberParent"){
            //     if(value.length!=10){
            //         return res.status(200).send({
            //             success:false,
            //             message:"Mobile number is not valid"
            //         })
            //     }
            // }
    
            //if more data_validation is needed . we can add here
        }
        //add more data validation as per required
    
        let student=new Student(data);
        student=await student.save();
    
        res.status(200).send({
            success:true,
            message:"Added student successfully",
            data:{
                name:data.firstName+" "+data.lastName
            }
        });

    }catch(err){
        res.status(500).send({
            success: false,
            message: "Error occurred while adding student",
            error: err.message
        });
    }
   

})


router.post('/student/delete', async (req, res) => {
    try {
        // let data = {
        //     email:req.body.email
        // };
        let data=req.body.email
       // console.log(data); 
        // Extract email from request body
       // console.log(data);
        // Find and delete the student based on email
        const deletedStudent = await Student.findOneAndDelete({ email:data });

        if (!deletedStudent) {
            // If student not found
            return res.status(404).send({
                success: false,
                message: "Student not found with the provided email."
            });
        }

        // If student deleted successfully
        res.status(200).send({
            success: true,
            message: "Student deleted successfully.",
            deletedStudent
        });
    } catch (err) {
        // If any error occurs
        res.status(500).send({
            success: false,
            message: "Error occurred while deleting student.",
            error: err.message
        });
    }
});




router.put('/student/edit', async (req, res) => {
    try {
        // let data = {
        //     email:req.body.email
        // };
        let data={
            email:req.body.email,
            price:req.body.price,
            batch:req.body.batch,
           lessonCategory:req.body.lessonCategory,
            mobileNumber:req.body.mobileNumber,
            managedBy:req.body.managedBy
        }
       // console.log(data); 
        // Extract email from request body
       // console.log(data);
        // Find and delete the student based on email
        const editedStudent = await Student.findOneAndUpdate({ email:data.email, managedBy:data.managedBy },
            { $set: { price:data.price,
                batch:data.batch,
                lessonCategory:data.lessonCategory,
                mobileNumber:data.mobileNumber
            
            }} 
        );

        if (!editedStudent) {
            // If student not found
            return res.status(404).send({
                success: false,
                message: "Student not found with the provided email."
            });
        }

        // If student deleted successfully
        res.status(200).send({
            success: true,
            message: "Student edited successfully.",
            data:editedStudent
        });
    } catch (err) {
        // If any error occurs
        res.status(500).send({
            success: false,
            message: "Error occurred while deleting student.",
            error: err.message
        });
    }
});











//Number of Students under that teacher ......GET API
router.get('/student/read', async (req, res) => {
    try {
         const id = req.query.id; // Get the id from request parameters
         const student = await Student.find({managedBy:id});
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
         const studentData = student.map(student => ({
            firstName: student.firstName,
            lastName: student.lastName,
            email: student.email,
            batch: student.batch,
            id:student._id 
        }));

        studentData.sort((a, b) => {
            return a.firstName.localeCompare(b.firstName);
        });
        res.send({
            success:true,
            data:studentData
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});





//Number of Students under that teacher in a batch ......GET API
router.get('/student/read/batch', async (req, res) => {
    try {
         const data = {
            id:req.query.id,
            batch:req.query.batch
         }; // Get the id from request parameters
         const student = await Student.find({managedBy:data.id,batch:data.batch});
         console.log(student)
        if (!student) {
            return res.status(404).send({ success:false,message: "Student not found" });
        }
         const studentData = student.map(student => ({
            firstName: student.firstName,
            lastName: student.lastName,
            email: student.email,
            id:student._id,
            attendenceStatus:student.attendenceStatus
        }));

        studentData.sort((a, b) => {
            return a.firstName.localeCompare(b.firstName);
        });
        res.send({
            success:true,
            data:studentData
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});





//update the student attendence

router.put('/student/Attendenceupdate', async (req, res) => {
    try {
        const { id, status } = req.body;

        // Validate the length of the arrays
        if (id.length !== status.length) {
            return res.status(400).send({
                success: false,
                message: "Length of ID and status arrays should be the same."
            });
        }

        const currentDate = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format

        // Iterate over the arrays to update each student's attendance status
        const updatedStudents = [];
        for (let i = 0; i < id.length; i++) {
            const updatedStudent = await Student.findOneAndUpdate(
                { _id: id[i] },
                {
                    $push: {
                        attendenceStatus: {
                            date: currentDate,
                            status: status[i]
                        }
                    }
                },
                { new: true,
                    projection: { _id: 0 }
                
                
                },
                
                 // Return the updated document
            );
            updatedStudents.push(updatedStudent);
        }

        res.status(200).send({
            success: true,
            message: "Attendance updated successfully.",
            updatedStudents: updatedStudents
        });
    } catch (err) {
        res.status(500).send({
            success: false,
            message: "Error occurred while updating attendance.",
            error: err.message
        });
    }
});





















//Edit Student 






module.exports=router;


