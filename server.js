var express = require("express");
var mongoose = require("mongoose");
var expressHandlebars = require("express-handlebars");
var bodyParser = require("body-parser");

//set up port
var PORT = process.env.PORT || 3000;

// Initialize Express
var app = express();

// express router
var router = express.Router();

//require routes file
require("./config/routes")(router);

// set up public folder
app.use(express.static(__dirname + "/public"));

//handlebars
app.engine("handlebars", expressHandlebars({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Use bodyParser in our app
app.use(bodyParser.urlencoded({
  extended:false
}));

//go through middleware
app.use(router);

// if deployed, use the deployed db. otherwise use the local mongoose db
var db = process.env.MONGODB_URI || "mongodb://user:welcome1@ds115963.mlab.com:15963/heroku_lf2tfdp3";

// connect mongoose to our db
mongoose.connect(db, function(error) {
  useMongoClient: true; 
  if (error) {
    console.log("error in server.js file: " + error);
  }else {
    console.log("mongoose connection is successful");
  }
});

//listen on port
app.listen(PORT, function() {
  console.log("listening on port: " + PORT);
});