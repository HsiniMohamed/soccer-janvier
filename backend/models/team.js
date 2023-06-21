//import mongoose module
const mongoose = require("mongoose");
// create match Shema
const teamSchema = mongoose.Schema({
  teamName: String,
  teamOwner: String,
  teamStadium: String,
});
// create model name
const team = mongoose.model("Team", teamSchema);

//make match exportable
module.exports = team;
