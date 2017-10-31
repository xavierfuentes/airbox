const Station = require('../models/Station');

exports.putStation = (req, res) => {
  const { station, data: { temperature, humidity, pollution } } = req.body;
  const query = { _id: station };
  const newStation = {
    $set: {
      temperature: { unit: temperature.unit, value: temperature.value },
      humidity,
      pollution,
      // raw: raw,
    },
  };
  const options = { upsert: true, new: true };

  Station.findByIdAndUpdate(query, newStation, options, (error, station) => {
    if (error) return res.send(500, { error });
    res.json({ station });
  });
};
