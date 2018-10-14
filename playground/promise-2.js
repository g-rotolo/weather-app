const request = require("request");

const key = "qSP03GfhYotSr0yyUGAVwh1oAxiJumLz";

const getGeocode = location => {

  const encodedLocation = encodeURIComponent(location);

  return new Promise((resolve, reject) => {
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
        if (!error && response.statusCode === 200) {
          resolve({
            city: body.results[0].locations[0].adminArea5,
            latitude: body.results[0].locations[0].latLng.lat,
            longitude: body.results[0].locations[0].latLng.lng
          });
        }
        reject("Unable to get the geolocalization");
      }
    );
  });
};

getGeocode("milano")
  .then(result => console.log(result))
  .catch(error => console.log(error));
