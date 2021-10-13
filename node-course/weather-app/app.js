// const request = require("request");

// const url =
//   "http://api.weatherstack.com/current?access_key=1e2fae27ba2c080faf03a80e59bb6749&query=&units=f";

// request({ url: url, json: true }, (error, response) => {
//   const data = response.body.current;
//   if (response.body.error) {
//     console.log(response.body.error.code);
//   } else {
//     console.log(
//       "It is currently " +
//         data.temperature +
//         " degree out there. There is " +
//         data.precip +
//         "% chances of rain"
//     );

//     console.log(data.weather_descriptions[0]);
//   }
// });

const geoCode = (address, callback) => {};

geoCode("kettering", (error, data) => {});
