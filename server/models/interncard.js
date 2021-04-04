const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InterncardSchema = new Schema({
    company: String,
    role: String,
    stipend: String,
    duration: String,
    startDate: String,
    applyBy: String,
    learnMore: String,
    updates: String,
    appliedStudents: [{type: String}]

    //array of applied interns here
});

module.exports = mongoose.model("Interncard", InterncardSchema);




