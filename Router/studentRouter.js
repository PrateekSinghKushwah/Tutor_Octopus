const { Student } = require('../Models/Student');
const express = require('express');
const router = express.Router();
const verifyToken=require('../Middlewares/verifyToken');
const { studentAdd, studentDelete, studentEdit, studentRead } = require('../Controllers/Student');
const { studentReadBatch } = require('../Controllers/Batch');
const { studentAttendanceRead, studentAttendanceEdit } = require('../Controllers/Attendance');







router.post('/student/add',verifyToken, 
studentAdd
)



router.post('/student/delete', studentDelete);




router.put('/student/edit', studentEdit);











//Number of Students under that teacher ......GET API
router.get('/student/read', studentRead);


//Number of Students under that teacher in a batch ......GET API
router.get('/student/read/batch', studentReadBatch);



router.get('/student/read/batch/date',studentReadBatch );






//update the student attendence

router.put('/student/Attendenceupdate', studentAttendanceEdit);




router.get('/student/read/AttendenceRecord',studentAttendanceRead);





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