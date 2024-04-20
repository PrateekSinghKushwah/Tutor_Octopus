const { Student } = require("../Models/Student");

exports.studentReadBatch=async (req, res) => {
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
}


exports.studentReadBatchDate=async (req, res) => {
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
}