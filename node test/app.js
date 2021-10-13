const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const morgan = require("morgan");
const envData = process.env;
app.use(cors);

const userRoutes = require("./routes/userRoutes");
app.use(morgan("dev"));
app.use(userRoutes);

mongoose
  .connect(envData.DB, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log(envData.DB);
    console.log("Mongo DB connected sucessfully ");
  })
  .catch((e) => {
    console.log("Error connecting to database");
  });

var project = "Philozooic";
var port = 7000;
app.listen(port, () => {
  console.log(`${project} is running at port ${port}`);
});

app.get("/test", function (req, res) {
  console.log("object");
});
