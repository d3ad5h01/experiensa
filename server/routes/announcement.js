const router = require("express").Router();
const Announcementcard = require("../models/announcementcard");

// POST request - create a new card
router.post("/announcementcards", async (req, res) => {
  try {
    let announcementcard = new Announcementcard();
    announcementcard.title = req.body.title;
    announcementcard.description = req.body.description;

    await announcementcard.save();

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
router.get("/announcementcards", async (req, res) => {
  try {
    let announcementcards = await Announcementcard.find().exec();

    res.json({
      success: true,
      announcementcards: announcementcards,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// GET request - get a single interncard
router.get("/announcementcards/:id", async (req, res) => {
  try {
    let announcementcard = await Announcementcard.findOne({ _id: req.params.id });
    res.json({
      success: true,
      announcementcard: announcementcard,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// PUT request - update a single interncard
router.put("/announcementcards/:id", async (req, res) => {
  try {
    let announcementcard = await Announcementcard.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
            title: req.body.title,
            description: req.body.description,
        },
      },
      { upsert: true }
    );

    res.json({
      success: true,
      updateAnnouncementcard: announcementcard,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// DELETE request - delete a single interncard
router.delete("/announcementcards/:id", async (req, res) => {
  try {
    let deleteAnnouncementcard = await Announcementcard.findOneAndDelete({ _id: req.params.id });

    if (deleteAnnouncementcard) {
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
