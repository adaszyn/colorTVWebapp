const express = require('express');
const app = express();
const weatherService = require('./weatherService');

app.get('/cities', function(req, res) {
    res.send(weatherService.getCities());
});

app.get('/forecast/:zipCode', function(req, res) {
    let zipCode = req.params.zipCode;
    if (!zipCode) {
        res.send("Forecast request call requires zipCode. Try /forecast/<zipCode>");
    } else {
        weatherService
            .getForecast(zipCode)
            .then((forecasteResponse) => res.send(forecasteResponse));
    }
});

app.get('/batch/:zipCodes', function(req, res) {
  let zipCodes = req.params.zipCodes;
  if (!zipCodes) {
    res.send("Cannot parse zipCodes!");
  }
  else {
    let result;
      Promise.all(zipCodes.split(',').map(weatherService
          .getForecast))
          .then((forecasteResponse) => res.send(forecasteResponse));
  }

});


app.listen(8000, function() {
    console.log('Server listening on port 8000!');
});

app.use(express.static('public'));
