const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InterncardSchema = new Schema({
    company: String,
    role: String,
    stipend: String,
    duration: String,
    startDate: String,
    applyBy: String,
    appliedStudents: [{type: String, unique: true}]

    //array of applied interns here
});

module.exports = mongoose.model("Interncard", InterncardSchema);




