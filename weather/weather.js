const request = require("request");

//https://api.darksky.net/forecast/b39828de3d9165d6daa92d702765fe30/37.8267,-122.4233

const forecastKey = "b39828de3d9165d6daa92d702765fe30";

const getWeather = (lat, long, callback) => {
  request(
    {
      url:
        "https://api.darksky.net/forecast/" +
        forecastKey +
        "/" +
        lat +
        "," +
        long,
      json: true
    },
    (error, response, body) => {
      debugger;
      if (error) {
        callback("Unable to connect to the Geolocalization services");
      } else if (response.statusCode !== 200) {
        callback("Unable to fetch weather");
      }
      // to show all nested objects in JSON with 2 space of indent:
      // JSON.stringify(body, undefined, 2);
      else {
        callback(undefined, body.currently.temperature);
      }
    }
  );
};

module.exports.getWeather = getWeather;
