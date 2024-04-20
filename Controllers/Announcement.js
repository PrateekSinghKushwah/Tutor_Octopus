const { Educator_info } = require("../Models/Educator_info");

exports.createAnnoucement=async (req, res) => {
    try {
        // Getting the data and validating it
        const data = {
            subject: req.body.subject,
            description: req.body.description,
            _id: req.body._id,
            batch: req.body.batch
        };

        // Validating data
        for (const key in data) {
            if (!data[key]) {
                return res.status(400).json({
                    success: false,
                    message: `${key} is missing`
                });
            }
        }


        // Update the announcement in the database
        const updatedUser = await Educator_info.findOneAndUpdate({ _id: data._id },
            {
                $push: {
                    announcement: {
                        batch: data.batch,
                        subject: data.subject,
                        description: data.description
                    }
                },
            }
        );

        if (updatedUser.nModified === 0) {
            return res.status(404).json({
                success: false,
                message: "User not found or announcement not updated"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Announcement updated successfully",
            // data: {
            //     subject:updatedUser.subject,
            //     description:updatedUser.description
            // } // This will contain the updated user object
        });
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}


exports.readAnnoucement=async (req, res) => {
    try {
        const data = {
            id: req.query.id,
            // batch:req.query.batch

        }

        // Retrieve id from query string


        // console.log(id);
        // console.log("check-2");

        if (!data.id) {
            return res.status(400).json({ message: "ID is required in the query parameters" });
        }

        const teacher = await Educator_info.findById(data.id);

        if (!teacher) {
            return res.status(404).json({ message: " no data is found" });
        }

        const { announcement } = teacher;
        // const requiredData=announcement.filter(item=>item.batch===data.batch);




        // Extract subject and description fields from the data
        // const { subject, description } = data;


        res.status(200).send({
            success: true,
            data: announcement
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}