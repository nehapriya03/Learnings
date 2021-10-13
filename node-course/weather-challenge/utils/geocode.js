const request = require("request");

const geoCode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1Ijoid2FpdGluZy1oemIiLCJhIjoiY2tyNTRzY2diMXhqaTJxbGRiNGR0bWp1cCJ9.5_VmiDNMvI6R0PlaLDV8KQ&limit=1";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      console.log("There is an error");
      callback("Unable to connect to location service!", undefined);
    } else if (body.features.length === 0) {
      callback("Unable to find location. Try another search", undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[0],
        longitude: body.features[0].center[1],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geoCode;
