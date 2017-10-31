const mongoose = require('mongoose');

const stationSchema = new mongoose.Schema(
  {
    temperature: {
      unit: String,
      value: Number,
    },
    humidity: Number,
    pollution: Number,
    // raw: mongoose.Schema.Types.Mixed,
  },
  { timestamps: true },
);

const station = mongoose.model('station', stationSchema);

module.exports = station;
