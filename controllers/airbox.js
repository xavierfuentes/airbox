const Reading = require('../models/Reading');

exports.postStation = (req, res) => {
  const { station, temperature, humidity, pollution } = req.body;
  const reading = new Reading({
    station,
    temperature: { unit: temperature.unit, value: temperature.value },
    humidity,
    pollution
  });

  reading.save((error) => {
    if (error) return res.send(500, { error });

    res.json(reading);
  });
};
