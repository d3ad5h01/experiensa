const router = require("express").Router();
const Interncard = require("../models/interncard");

// POST request - create a new card
router.post("/interncards", async (req, res) => {
  try
  {
    let interncard = new Interncard();
    interncard.company = req.body.company;
    interncard.role = req.body.role;
    interncard.stipend = req.body.stipend;
    interncard.duration = req.body.duration;
    interncard.startDate = req.body.startDate;
    interncard.applyBy = req.body.applyBy;
    interncard.learnMore = req.body.learnMore;
    interncard.updates = req.body.updates;
    interncard.appliedStudents = [];
    await interncard.save();

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
router.get("/interncards", async (req, res) => {
  try {
    let interncards = await Interncard.find().exec();

    res.json({
      success: true,
      interncards: interncards,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// GET request - get a single interncard
router.get("/interncards/:id", async (req, res) => {
  try {
    let interncard = await Interncard.findOne({ _id: req.params.id });
    res.json({
      success: true,
      interncard: interncard,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// PUT request - update a single interncard
router.put("/interncards/:id", async (req, res) => {
  try {
    let interncard = await Interncard.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
            company: req.body.company,
            role: req.body.role,
            stipend: req.body.stipend,
            duration: req.body.duration,
            startDate: req.body.startDate,
            applyBy: req.body.applyBy,
            learnMore: req.body.learnMore,
            updates: req.body.updates,
            appliedStudents: req.body.appliedStudents,
        },
      },
      { upsert: true }
    );

    res.json({
      success: true,
      updateInterncard: interncard,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// DELETE request - delete a single interncard
router.delete("/interncards/:id", async (req, res) => {
  try {
    let deleteInterncard = await Interncard.findOneAndDelete({ _id: req.params.id });

    if (deleteInterncard) {
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
