const yargs = require("yargs");

const geocode = require("./geocode/geocode");
const weather = require('./weather/weather');

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

geocode.getGeocodeAddress(argv.address, (errorMessage, result) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(`Latitude: ${result.latitude}`);
    console.log(`Longitude: ${result.longitude}`);
  }
});

weather.getWeather()
