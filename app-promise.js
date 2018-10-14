const yargs = require("yargs");
const axios = require("axios");

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

const geoApiKey = "qSP03GfhYotSr0yyUGAVwh1oAxiJumLz";
const forecastKey = "b39828de3d9165d6daa92d702765fe30";
const encodedLocation = encodeURIComponent(argv.address);
const geoUrl =
  "http://www.mapquestapi.com/geocoding/v1/address?key=" +
  geoApiKey +
  "&location=" +
  encodedLocation;

const getWeather = () => {
  debugger;
  axios.get(geoUrl)
    .then(locationResponse => {
      console.log(locationResponse.data);
    })
    .catch(e => {
      console.log(e);
    })
};

getWeather();
