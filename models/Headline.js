var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var headlineSchema = new Schema({
  headline: {
    type: String,
    required: true,
    unique: true,
  },
  summary: {
    type: String,
    required: true
  },
  date: String,
  saved: {
    type: Boolean,
    default: false,
  }
});

var Headline = mongoose.model("Headline", headlineSchema);

// Export the User model
module.exports = Headline;

