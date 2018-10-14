const request = require("request");

// To create automatic %20 in case of spaces in a string
// encodeURIComponent('1301 lombard street philadelphia')
// '1301%20lombard%20street%20philadelphia'
// decodeURIComponent to inverse the process

const key = "qSP03GfhYotSr0yyUGAVwh1oAxiJumLz";

const getGeocodeAddress = (location, callback) => {

  const encodedLocation = encodeURIComponent(location);

  request(
    {
      url:
        "http://www.mapquestapi.com/geocoding/v1/address?key=" +
        key +
        "&location=" +
        encodedLocation,
      json: true
    },
    (error, response, body) => {
      debugger;
      if (error) {
        callback("Unable to connect to the Geolocalization services");
      } else if (body.info.statuscode === 400) {
        callback(body.info.messages[0]);
      }
      // to show all nested objects in JSON with 2 space of indent:
      // JSON.stringify(body, undefined, 2);
      else {
        callback(undefined, {
          city: body.results[0].locations[0].adminArea5,
          latitude: body.results[0].locations[0].latLng.lat,
          longitude: body.results[0].locations[0].latLng.lng
        });
      }
    }
  );
};

module.exports = {
  getGeocodeAddress: getGeocodeAddress
};
