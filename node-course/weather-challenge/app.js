const request = require("request");
const geoCode = require("./utils/geocode.js");
const forecast = require("./utils/forecast");
const { argv } = require("process");

// const url =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/kettering.json?access_token=pk.eyJ1Ijoid2FpdGluZy1oemIiLCJhIjoiY2tyNTRzY2diMXhqaTJxbGRiNGR0bWp1cCJ9.5_VmiDNMvI6R0PlaLDV8KQ&limit=1";

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log("There is some error");
//   } else if (response.body.features.length === 0) {
//     console.log("Feature is empty");
//   } else {
//     const latitute = response.body.features[0].center[1];
//     const longitute = response.body.features[0].center[0];

//     console.log(latitute);
//     console.log(longitute);
//   }
// });

if (!process.argv[2]) {
  console.log("Please enter the address");
} else {
  geoCode(process.argv[2], (error, { latitude, longitude, location }) => {
    if (error) {
      return console.log("There is an error");
    } else {
    }
    console.log("Error", error);
    console.log("Data", { latitude, longitude, location });

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      } else {
      }

      console.log("Error", error);
      console.log(location);
      console.log("Data", forecastData);
    });
  });
}

// forecast(-75.7088, 44.1545, (error, data) => {
//   console.log("Error", error);
//   console.log("Data", data);
// });
