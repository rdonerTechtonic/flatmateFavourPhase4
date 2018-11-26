const mongoose = require ('mongoose');

var HouseholdSchema = new mongoose.Schema({
  houseName: String,
  houseOwner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  houseAddress: String,
  houseCity: String,
  houseState: String,
  houseLongitude: Number,
  houseLatitude: Number,
});




mongoose.model('Household', HouseholdSchema);

module.exports = mongoose.model('Household');
