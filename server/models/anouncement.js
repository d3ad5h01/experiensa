const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnouncementSchema = new Schema({
  title: String,
  description: String,
});

module.exports = mongoose.model("Anouncement", AnouncementSchema);
