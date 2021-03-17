const router = require("express").Router();
const Studycard = require("../models/studycard");

// POST request - create a new card
router.post("/studycards", async (req, res) => {
  try {
    let studycard = new Studycard();
    studycard.title = req.body.title;
    studycard.link = req.body.link;

    await studycard.save();

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
router.get("/studycards", async (req, res) => {
  try {
    let studycards = await Studycard.find().exec();

    res.json({
      success: true,
      studycards: studycards,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// GET request - get a single interncard
router.get("/studycards/:id", async (req, res) => {
  try {
    let studycard = await Studycard.findOne({ _id: req.params.id });
    res.json({
      success: true,
      studycard: studycard,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// PUT request - update a single interncard
router.put("/studycards/:id", async (req, res) => {
  try {
    let studycard = await Studycard.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
            title: req.body.title,
            link: req.body.link,
        },
      },
      { upsert: true }
    );

    res.json({
      success: true,
      updateStudycard: studycard,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// DELETE request - delete a single interncard
router.delete("/studycards/:id", async (req, res) => {
  try {
    let deleteStudycard = await Studycard.findOneAndDelete({ _id: req.params.id });

    if (deleteStudycard) {
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
