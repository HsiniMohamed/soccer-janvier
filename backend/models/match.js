//import mongoose module
const mongoose = require("mongoose");
// create match Shema
const matchSchema = mongoose.Schema({
  teamOne: String,
  teamTwo: String,
  scoreOne: Number,
  scoreTwo: Number,
});
// create model name
const match = mongoose.model("Match", matchSchema);

//make match exportable
module.exports = match;
