const { Student } = require('../Models/Student');
const express = require('express');
const router = express.Router();
const verifyToken=require('../Middlewares/verifyToken');







router.post('/student/add',verifyToken, async (req ,res) => {
    // const user = await Educator_info.findOne({ email: req.body.email })
    try{
        let data={
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            emailReminder:req.body.emailReminder,
            smsReminder:req.body.smsReminder,
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
            // preference:req.body.preference,
            lessonCategory:req.body.lessonCategory,
            lessonLength:req.body.lessonLength,
            billing:req.body.billing,
            price:req.body. price,
            notes:req.body.notes,
            managedBy:req.body.managedBy
        }
        console.log(data);
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
            batch:req.query.batch,
            date:req.query.date
         }; // Get the id from request parameters
        // const student = await Student.find({managedBy:data.id,batch:data.batch,attendenceStatus:data.date});
         const student = await Student.find({managedBy:data.id,batch:data.batch});
         console.log(student)
        if (!student) {
            return res.status(404).send({ success:false,message: "Student not found" });
        }
         const studentData = student.map(student => ({
            firstName: student.firstName,
            lastName: student.lastName,
            email: student.email,
            id:student.id,
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



router.get('/student/read/batch/date', async (req, res) => {
    try {
        const data = {
            id: req.query.id,
            batch: req.query.batch,
            date: req.query.date
        }; // Get the id, batch, and date from request parameters

        const students = await Student.find({ managedBy: data.id, batch: data.batch });

        if (!students) {
            return res.status(404).send({ success: false, message: "Students not found" });
        }

        // Filter students based on the provided date
        const presentStudents = students.filter(student => {
            return student.attendenceStatus.some(status => {status.date === data.date , status.status===true});
        });
        console.log(presentStudents);

        res.send({
            success: true,
            data: presentStudents
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});






//update the student attendence

router.put('/student/Attendenceupdate', async (req, res) => {
    try {
        const { id, status,date } = req.body;

        // Validate the length of the arrays
        if (id.length !== status.length) {
            return res.status(400).send({
                success: false,
                message: "Length of ID and status arrays should be the same."
            });
        }

        //check if the date is already there. if date is there, then 
        //a message will be displayed "Attendece for the date is taken"

       let student=await Student.findOne({_id:id[0]});
       let dateBackend=student.attendenceStatus.map(item=>item.date);

       

        //const currentDate = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
        //const currDate = new Date().toISOString().split('T')[0];
        if(dateBackend.includes(date))
        {
            return res.status(500).send({
                success:false,
                message:"Attendece for the day is taken" ,
                status:405  
            })
        }

        // Iterate over the arrays to update each student's attendance status
        const updatedStudents = [];
        for (let i = 0; i < id.length; i++) {
            const updatedStudent = await Student.findOneAndUpdate(
                { _id: id[i] },
                {
                    $push: {
                        attendenceStatus: {
                            date: date,
                            status: status[i]
                        },
                        presentDate: status[i]===true?date:"nothing" ,
                        allDate:date
                    },
                    // $push:{
                    //     allDate
                    // }
                },
                { new: true,
                    projection: { _id: 0 }
                
                
                },
                
                 // Return the updated document
            );
            
            // if(status[i]===true){
            //     updatedStudent.presentDate.push(currentDate);
            //     await updatedStudent.save();
            //     console.log(updatedStudent.presentDate)
            // }
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




router.get('/student/read/AttendenceRecord', async (req, res) => {
    try {
         const data = {
            student_id:req.query.student_id,
            // batch:req.query.batch,
            // teacher_id:req.query.teacher_id
         }; // Get the id from request parameters
         const student = await Student.findOne({_id:data.student_id});
        //  managedBy:data.teacher_id,batch:data.batch,
         //console.log(student)
        if (!student) {
            return res.status(404).send({ success:false,message: "Student not found" });
        }
        //get the Attendence-data from the list 
       let reqdata={
        date:[],
        status:[],
        trueCount:0,
        falseCount:0
       }
       for(let i=0;i<student.attendenceStatus.length;i++){
        reqdata.date.push(student.attendenceStatus[i].date);
        reqdata.status.push(student.attendenceStatus[i].status);
       }
       //let trueCount=0,falseCount=0;
       for (const value of reqdata.status) {
        if (value === true) {
            reqdata.trueCount=reqdata.trueCount+1;
        } else {
            reqdata.falseCount=reqdata.falseCount+1;
        }
    }



        // studentData.sort((a, b) => {
        //     return a.firstName.localeCompare(b.firstName);
        // });
        res.send({
            success:true,
            data:reqdata,
            // present:trueCount,
            // absent:falseCount
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});





router.get('/student/read/AttendenceRecord/AllStudent', async (req, res) => {
    try {
        const currDate = new Date().toISOString().split('T')[0];
         const data = {
            date:req.query.date||currDate,
            batch:req.query.batch,
            managedBy:req.query.id
            // batch:req.query.batch,
            // teacher_id:req.query.teacher_id
         }; // Get the id from request parameters
         const student = await Student.find({batch:data.batch,managedBy:data.managedBy});
        //  managedBy:data.teacher_id,batch:data.batch,
         console.log(student)
        if (!student) {
            return res.status(404).send({ success:false,message: "Student not found" });
        }
        let PstudentData=[],AstudentData=[];
        for(let i=0;i<student.length;i++){

            if(student[i].allDate.includes(data.date)) {
                if(student[i].presentDate.includes(data.date)){
                    PstudentData.push(student[i])
                }
                else  {
                    AstudentData.push(student[i])
                }
            }
            else{
                PstudentData.push(student[i])
            }
           
            

        }
       
        //get the Attendence-data from the list 
         PstudentData = PstudentData.map(student => ({
            firstName: student.firstName,
            lastName: student.lastName,
            email:student.email,
            status:true,
            id:student.id,

        }));

        AstudentData = AstudentData.map(student => ({
            firstName: student.firstName,
            lastName: student.lastName,
            email:student.email,
            id:student.id,
            status:false

        }));

        let finalArray=[...PstudentData,...AstudentData]

        finalArray.sort((a, b) => {
            return a.firstName.localeCompare(b.firstName);
        });

        res.status(200).send({
            success:true,
            data:finalArray
        });




    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});











router.get('/student/read/AttendenceRecord/AllStudent/RecordButton', async (req, res) => {
    try {
        const currDate = new Date().toISOString().split('T')[0];
         const data = {
            date:req.query.date,
            batch:req.query.batch,
            managedBy:req.query.id
            // batch:req.query.batch,
            // teacher_id:req.query.teacher_id
         }; // Get the id from request parameters

         const student = await Student.findOne({batch:data.batch,managedBy:data.managedBy});

         if(!student.allDate.includes(data.date)){
            return res.send({
                success:false,
                message:"Attendence for this date is not taken",
                status:501
            })
         }
         const students = await Student.find({batch:data.batch,managedBy:data.managedBy});
        //  managedBy:data.teacher_id,batch:data.batch,
         //console.log(student)
        if (!students) {
            return res.status(404).send({ success:false,message: "Student not found" });
        }
        let PstudentData=[],AstudentData=[];
        for(let i=0;i<students.length;i++){

            if(students[i].allDate.includes(data.date)) {
                if(students[i].presentDate.includes(data.date)){
                    PstudentData.push(students[i])
                }
                else  {
                    AstudentData.push(students[i])
                }
            }
            else{
                PstudentData.push(students[i])
            }
           
            

        }
       
        //get the Attendence-data from the list 
         PstudentData = PstudentData.map(student => ({
            firstName: student.firstName,
            lastName: student.lastName,
            email:student.email,
            status:"Present"

        }));

        AstudentData = AstudentData.map(student => ({
            firstName: student.firstName,
            lastName: student.lastName,
            email:student.email,
            status:"Absent"

        }));

        let finalArray=[...PstudentData,...AstudentData]

        finalArray.sort((a, b) => {
            return a.firstName.localeCompare(b.firstName);
        });

        res.status(200).send({
            success:true,
            data:finalArray,
            totalP:PstudentData.length,
            totalA:AstudentData.length
        });




    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});








// router.get('/student/read/AttendenceRecord/All', async (req, res) => {
//     try {
//          const data = {
//             batch:req.query.batch,
//             date:req.query.date
//             // batch:req.query.batch,
//             // teacher_id:req.query.teacher_id
//          }; // Get the id from request parameters
//          const student = await Student.find({batch:data.batch});
//         //  managedBy:data.teacher_id,batch:data.batch,
//          //console.log(student)
//         if (!student) {
//             return res.status(404).send({ success:false,message: "Student not found" });
//         }
//         //get the Attendence-data from the list 

//         for(let i=0;i<student.length;i++)
//         {
//             let reqdata={
//                 date:[],
//                 status:[],
//                 trueCount:0,
//                 falseCount:0
//                }


//                for(let i=0;i<student.attendenceStatus.length;i++){
//                 if(student.attendenceStatus.includes({date:data.date,status:true}))
//                }
//                //let trueCount=0,falseCount=0;
//             //    for (const value of reqdata.status) {
//             //     if (value === true) {
//             //         reqdata.trueCount=reqdata.trueCount+1;
//             //     } else {
//             //         reqdata.falseCount=reqdata.falseCount+1;
//             //     }
//             // }
            
//         }
       
//        for(let i=0;i<student.attendenceStatus.length;i++){
//         reqdata.date.push(student.attendenceStatus[i].date);
//         reqdata.status.push(student.attendenceStatus[i].status);
//        }
//        //let trueCount=0,falseCount=0;
//        for (const value of reqdata.status) {
//         if (value === true) {
//             reqdata.trueCount=reqdata.trueCount+1;
//         } else {
//             reqdata.falseCount=reqdata.falseCount+1;
//         }
//     }



//         // studentData.sort((a, b) => {
//         //     return a.firstName.localeCompare(b.firstName);
//         // });
//         res.send({
//             success:true,
//             data:reqdata,
//             // present:trueCount,
//             // absent:falseCount
//         });
//     } catch (error) {
//         console.error("Error:", error);
//         res.status(500).json({ message: "Internal server error" });
//     }
// });































//Edit Student 






module.exports=router;


