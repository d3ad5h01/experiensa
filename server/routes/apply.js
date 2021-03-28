const router = require("express").Router();
const Interncard = require("../models/interncard");
const User = require("../models/user");
const jwt = require('jsonwebtoken');

//has to pass in internship id in req.body.internship_id and cookie in req.body.cookie
router.put("/apply", async(req,res) => {
    try{
        // console.log("hello");
        let interncard = await Interncard.findOne({ _id: req.body.internship_id });
        console.log(interncard);
        let cookie = req.body.cookie;
        console.log(cookie);
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
        let list = decoded_user.internships;
        //add check for duplicates
        list.push(interncard);
        let user = await  User.findOneAndUpdate(
            { _id: decoded_user._id },
            {
                $set: {
                    internships: list,
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
    } catch(error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

module.exports = router;