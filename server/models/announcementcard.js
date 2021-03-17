const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnnouncementSchema = new Schema({
  title: String,
  description: String,
  date: Date
});

module.exports = mongoose.model("Announcement", AnnouncementSchema);
