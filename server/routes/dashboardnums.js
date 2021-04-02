const router = require("express").Router();
const Dashboardcard = require("../models/dashboardData");

// POST request - create a new card
router.post("/dashboardcards", async (req, res) => {
  try {
    let dashboardcard = new Dashboardcard();
    dashboardcard.companiesRegistered = req.body.companiesRegistered;
    dashboardcard.totalInternships = req.body.totalInternships;
    dashboardcard.studentsRegistered = req.body.studentsRegistered;
    dashboardcard.studentsPlaced = req.body.studentsPlaced;
    await dashboardcard.save();

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
router.get("/dashboardcards", async (req, res) => {
  try {
    let dashboardcards = await Dashboardcard.find().exec();

    res.json({
      success: true,
      dashboardcards: dashboardcards,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// GET request - get a single interncard
router.get("/dashboardcards/:id", async (req, res) => {
  try {
    let dashboardcard = await Dashboardcard.findOne({ _id: req.params.id });
    res.json({
      success: true,
      dashboardcard: dashboardcard,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// PUT request - update a single interncard
router.put("/dashboardcards/:id", async (req, res) => {
  try {
    let dashboardcard = await Dashboardcard.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
            
            companiesRegistered: req.body.companiesRegistered,
            totalInternships: req.body.totalInternships,
            studentsRegistered: req.body.studentsRegistered,
            studentsPlaced: req.body.studentsPlaced,
        },
      },
      { upsert: true }
    );

    res.json({
      success: true,
      updatedashboardcard: dashboardcard,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// DELETE request - delete a single interncard
router.delete("/dashboardcards/:id", async (req, res) => {
  try {
    let deleteDashboardcard = await Dashboardcard.findOneAndDelete({ _id: req.params.id });

    if (deleteDashboardcard) {
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
