const request = require('request');

const getForecastUrl = (query) => `https://query.yahooapis.com/v1/public/yql?q=${query}&format=json`;
const getForecastQuery = (zipCode) =>
   `select * from weather.forecast
    where woeid in
    (select woeid from geo.places(1) where text='${zipCode}')
    and u='c'`;


module.exports = {
    getForecast: (zipCode) =>
        new Promise((resolve, reject) => {
            request(getForecastUrl(getForecastQuery(zipCode)), function(error, response, body) {
                if (!error && response.statusCode === 200) {
                    let result = JSON.parse(body).query.results.channel;
                    resolve({
                        location: result.location,
                        wind: result.wind,
                        atmosphere: result.atmosphere,
                        temperature: result.item.condition.temp,
                        forecast: result.item.forecast
                    })

                } else {
                    reject("Cannot fetch data for selected city.")
                }
            });
        }),
    getCities: () => [{
        name: "New York",
        code: "10001"
    }, {
        name: "Hollywood Hills, CA",
        code: "90046"
    }, {
        name: "Washington",
        code: "20500"
    }]

}
