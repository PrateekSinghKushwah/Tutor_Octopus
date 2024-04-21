const { Educator_info } = require("../Models/Educator_info");
const { Student } = require("../Models/Student");

exports.studentReadBatch=async (req, res) => {
    try {
         const data = {
            id:req.query.id,
            batch:req.query.batch,
         }; // Get the id from request parameters
        // const student = await Student.find({managedBy:data.id,batch:data.batch,attendenceStatus:data.date});
         const student = await Student.find({managedBy:data.id,batch:data.batch});
        //  console.log(student)
        if (!student) {
            return res.status(404).send({ success:false,message: "Student not found" });
        }
         const studentData = student.map(student => ({
            firstName: student.firstName,
            lastName: student.lastName,
            email: student.email,
            id:student._id
            // id:student.id,
            // attendenceStatus:student.attendenceStatus
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


exports.studentWithoutBatch=async(req,res)=>{
    try{
        const userId=req.query.id
        const studentdata=await Student.find({managedBy:userId,batch:""});
        console.log(studentdata);
        if(!studentdata){
            return res.send({
                success:false,
                message:"There are no students without a batch!!"
            })
        }
        let requiredData= studentdata.map(student => ({
            firstName: student.firstName,
            lastName: student.lastName,
            email: student.email,
            id:student._id
        }));

        requiredData.sort((a, b) => {
            return a.firstName.localeCompare(b.firstName);
        });

        return res.status(200).send({
            success:true,
            message:"Students without batch",
            data:requiredData

        })

    }catch(err){
        return res.send({
            success:false,
            error:err.message
        })
    }
}


exports.studentWithoutBatchAdd=async (req ,res) => {
    // const user = await Educator_info.findOne({ email: req.body.email })
    try{
        let data={
            batch:req.body.batch,
            studentIds:req.body.studentIds,
            userId:req.body.userId
        }
        //console.log(data);
        //add more data validation as per required
        if(data.batch.length===0){
            return res.send({
                message:"Add Batch name"
            })
        }
        else if(data.studentIds.length===0){
            return res.send({
                message:"Select Student"
            })
        }

        for(let i=0;i<data.studentIds.length;i++){
             await Student.findByIdAndUpdate(data.studentIds[i],
                { $set: { 
                    batch:data.batch
                }} 
            );
        }

        await Educator_info.findByIdAndUpdate(data.userId,{
            $push:{
                batch:data.batch 
            }
        })
    
       
    
        return res.status(200).send({
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
   

}


