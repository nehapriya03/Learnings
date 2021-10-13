const mongodb = require("mongodb");
const cors = require("cors");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const envData = process.env;
require("dotenv").config();

app.use(cors());

mongoose
  .connect(envData.DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    // useFindOneAndUpdate: false,
    // useFindOneAndDelete: false,
  })
  .then(() => {
    console.info("Mongodb connected sucesfully");
  })
  .catch((error) => {
    console.info(envData.DB);
    console.log(error);
    console.info("Some error occured");
  });
