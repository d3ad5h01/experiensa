const verifyToken = require("../middlewares/verify-token");
const router = require("express").Router();
const User = require("../models/user");

// POST request - create a new card
router.post("/users", async (req, res) => {
  try {
    let user = new User();
    user.name = req.body.name;
    user.email = req.body.email;

    await user.save();

    res.json({
      status: true,
      message: "Successfully saved",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// GET request - get all interncards
router.get("/users", async (req, res) => {
  try {
    let users = await User.find().exec();

    res.json({
      success: true,
      users: users,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// GET request - get a single usercard
router.get("/users/:id", async (req, res) => {
  try {
    let user = await User.findOne({ _id: req.params.id });
    res.json({
      success: true,
      user: user,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// PUT request - update a single interncard
router.put("/users/:id", async (req, res) => {
  try {
    let user = await User.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
            sem: req.body.sem,
            batch: req.body.batch,
            bio: req.body.bio,
            section: req.body.section,
            phone: req.body.phone,
            addr_line: req.body.addr_line,
            city: req.body.city,
            state: req.body.state,
            country: req.body.country,
        },
      },
      { upsert: true }
    );

    res.json({
      success: true,
      updateUser: user,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// PUT request - to update password also
router.put("/userupdatepassword/:id", async (req, res) => {
  try {
    let user = await User.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
            sem: req.body.sem,
            batch: req.body.batch,
            bio: req.body.bio,
            section: req.body.section,
            phone: req.body.phone,
            addr_line: req.body.addr_line,
            city: req.body.city,
            state: req.body.state,
            country: req.body.country,
            password: req.body.password,
            email: req.body.email,
            name: req.body.name,
        },
      },
      { upsert: true }
    );

    res.json({
      success: true,
      updateUser: user,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});


// DELETE request - delete a single interncard
router.delete("/users/:id", async (req, res) => {
  try {
    let deleteUser = await User.findOneAndDelete({ _id: req.params.id });

    if (deleteUser) {
      res.json({
        status: true,
        message: "Successfuly deleted!",
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;
