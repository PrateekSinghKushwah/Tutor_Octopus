const { Student } = require("../Models/Student");

exports.studentAttendanceEdit=async (req, res) => {
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
}


exports.studentAttendanceRead= async (req, res) => {
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
}

exports.readAttendanceRecord=async (req, res) => {
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
}

exports.readAttendanceRecordAll=async (req, res) => {
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
}

exports.readAttendanceRecordButton=async (req, res) => {
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
}