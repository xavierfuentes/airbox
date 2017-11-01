const mongoose = require('mongoose');

const readingSchema = new mongoose.Schema(
  {
    station: String,
    temperature: {
      unit: String,
      value: Number,
    },
    humidity: { type: Number, min: 0, max: 100 },
    pollution: Number,
    // raw: mongoose.Schema.Types.Mixed,
  },
  { timestamps: true },
);

const reading = mongoose.model('reading', readingSchema);

module.exports = reading;
