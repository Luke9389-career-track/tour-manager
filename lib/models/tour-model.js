const mongoose = require('mongoose');
const { Schema } = mongoose;
const { RequiredString } = require('./required-types');

const schema = new Schema({
  title: RequiredString,
  activities: [String],
  launchDate: Date,
  stops: [{
    location: {
      latitude: Number,
      longitude: Number
    },
    weather: {
      time: Date,
      forecast: String
    },
    attendance: {
      type: Number,
      min: 1
    }
  }]
});

schema.statics = {
  addStop(id, stop) {
    return this.updateById(
      id,
      {
        $push: {
          stops: stop
        }
      }
    )
      .then(tour => {
        console.log(tour);
        return tour.stops;
      });
  }
};

module.exports = mongoose.model('Tour', schema);