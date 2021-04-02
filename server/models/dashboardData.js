const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DashboardSchema = new Schema({
    companiesRegistered: String,
    totalInternships: String,
    studentsRegistered: String,
    studentsPlaced: String,
});

module.exports = mongoose.model("DashboardCards", DashboardSchema);




