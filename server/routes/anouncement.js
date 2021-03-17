const router = require("express").Router();
const Anouncementcard = require("../models/announcementcard");

// POST request - create a new card
router.post("/anouncementcards", async (req, res) => {
  try {
    let anouncementcard = new Anouncementcard();
    anouncementcard.title = req.body.title;
    anouncementcard.description = req.body.description;

    await anouncementcard.save();

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
router.get("/anouncementcards", async (req, res) => {
  try {
    let anouncementcards = await Anouncementcard.find().exec();

    res.json({
      success: true,
      anouncementcards: anouncementcards,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// GET request - get a single interncard
router.get("/anouncementcards/:id", async (req, res) => {
  try {
    let anouncementcard = await Anouncementcard.findOne({ _id: req.params.id });
    res.json({
      success: true,
      anouncementcard: anouncementcard,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// PUT request - update a single interncard
router.put("/anouncementcards/:id", async (req, res) => {
  try {
    let anouncementcard = await Anouncementcard.findOneAndUpdate(
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
      updateAnouncementcard: anouncementcard,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// DELETE request - delete a single interncard
router.delete("/anouncementcards/:id", async (req, res) => {
  try {
    let deleteAnouncementcard = await Anouncementcard.findOneAndDelete({ _id: req.params.id });

    if (deleteAnouncementcard) {
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
