// Step 1 - set up required dependencies

var express = require("express");
var app = express();
var mongoose = require("mongoose");
// var Students = require('./model/model');
var multer = require("multer");
var fs = require("fs");
var path = require("path");
require("dotenv/config");

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Step 2 - connect to the database

const dbUrl = 'mongodb://localhost/practisedb';

mongoose
  .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(3000, (req, res) => {
      console.log('Listening to request on port 3000');
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render("index", { title: "Home | Page" });
});