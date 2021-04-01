const router = require("express").Router();
const Interncard = require("../models/interncard");
const User = require("../models/user");
const jwt = require('jsonwebtoken');

//has to pass in internship id in req.body.internship_id and cookie in req.body.cookie
router.put("/apply", async(req,res) => {
    try{
        // console.log(req.body.internship_id);
        let interncard = await Interncard.findOne({ _id: req.body.internship_id });
        let cookie = req.body.cookie;
        let decoded_user;
        jwt.verify(cookie, process.env.SECRET, (err,decoded) => {
            if(err){
                res.json({
                    success: false,
                    message: "Cookie error"
                });
            } else {
                decoded_user = decoded;
            }
        });
        let found_user = await User.findOne({ _id: decoded_user._id }).populate(
            "adress"
        );
        let user_internships = found_user.internships;
        // console.log(interncard);
        let flag = 0;
        //add check for duplicates
        for(let i=0;i<user_internships.length;i++){
            if(user_internships[i]._id==req.body.internship_id)
            {
                flag = 1;
            }
        }
        if(flag===0)
        {
            user_internships.push(interncard);
            let user = await  User.findOneAndUpdate(
                { _id: decoded_user._id },
                {
                    $set: {
                        internships: user_internships,
                    },
                },
                { upsert: true }
            );
            let internship_studs = interncard.appliedStudents;
            internship_studs.push(decoded_user.email);
            let internship = await Interncard.findOneAndUpdate(
                { _id: req.body.internship_id },
                {
                    $set: {
                        appliedStudents: internship_studs,
                    },
                },
                { upsert: true }
            );
            res.json({
                success: true,
                message: "Internship added.",
                updatedUser: user,
                updatedInternship: internship,
            });
        }
        else
        {
            res.json({
                success: true,
                message: "Internship exists",
            });
        }
    } catch(error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

module.exports = router;