//import mongoose module
const mongoose = require("mongoose");
// create player Shema
const playerSchema = mongoose.Schema({
  name: String,
  position: String,
  number: Number,
  age: Number,
});
// create model name
const player = mongoose.model("Player", playerSchema);

//make player exportable
module.exports = player;
