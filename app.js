const yargs = require("yargs");

const geocode = require("./geocode/geocode");
const weather = require("./weather/weather");

const argv = yargs
  .options({
    address: {
      demand: true,
      alias: "a",
      describe: "Address to fetch the weather",
      string: true
    }
  })
  .help()
  .alias("help", "h").argv;

geocode.getGeocodeAddress(argv.address, (errorMessage, geoResult) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    weather.getWeather(geoResult.latitude, geoResult.longitude, (errorMessage, weatherResult) => {
      if (errorMessage) {
        console.log(errorMessage);
      } else {
        console.log(`The temperature for ${geoResult.city} is ${weatherResult.temperature}`);
        console.log(`But it feels like ${weatherResult.apparentTemperature}`);
      }
    });
  }
});
