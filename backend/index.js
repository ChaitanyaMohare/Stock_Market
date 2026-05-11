require('dotenv').config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;
const uri = process.env.MONGO_URL;

mongoose.connect(uri)
  .then(() => console.log("Connection Done"))
  .catch(err => console.error(err));


app.listen(8080,() =>
{ console.log("app started")});