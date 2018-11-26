var mongoose = require('mongoose');

var EventSchema = new mongoose.Schema({
  eventTitle: String,
  eventOwner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  eventAssignees: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  eventDescription: String,
  eventStartDate: Date,
  eventEndDate: Date,
  eventLocation: String,
  eventStatus: String,
  houseId: {type: mongoose.Schema.Types.ObjectId, ref: 'Household'}
});

mongoose.model('Event', EventSchema);
module.exports = mongoose.model('Event');