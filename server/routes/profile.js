const verifyToken = require("../middlewares/verify-token");
const router = require("express").Router();
const User = require("../models/user");

router.post("/profile/", verifyToken, async (req, res) => {
    try
    {
        let user = await User.findOne({ _id: req.decoded._id }).populate(
            "adress"
        );
        res.json({
            success: true,
            user: user,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
});

module.exports = router;
