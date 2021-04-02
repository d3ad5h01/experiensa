const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
//const multer = require("multer");

dotenv.config();
const app = express();

mongoose.connect(
  process.env.DB,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to the database");
    }
  }
);

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// require apis
const InterncardRoutes = require("./routes/interncard");
const authUserRoutes = require("./routes/auth");
const AnnouncementRoutes = require("./routes/announcement")
const studyRoutes = require("./routes/study");
const userRoutes = require("./routes/user")
const profileRoute = require("./routes/profile")
const verifyRoute = require("./routes/verifytoken")
const applyRoute = require("./routes/apply")
const azureRoute = require("./routes/azure");
const DashboardRoute = require("./routes/dashboardnums");

app.use("/api", InterncardRoutes);
app.use("/api", authUserRoutes);
app.use("/api", AnnouncementRoutes);
app.use("/api", studyRoutes);
app.use("/api",userRoutes);
app.use("/api",profileRoute);
app.use("/api",verifyRoute);
app.use("/api",applyRoute);
app.use("/api",azureRoute);
app.use("/api",DashboardRoute);

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Listening on PORT", 3000);
  }
});
