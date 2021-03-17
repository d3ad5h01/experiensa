const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudySchema = new Schema({
  title: String,
  link: String,
});

module.exports = mongoose.model("Study", StudySchema);
