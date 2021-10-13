const request = require("request");

const forecast = (latitude, lonitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=1e2fae27ba2c080faf03a80e59bb6749&query=" +
    lonitude +
    "," +
    latitude +
    "&units=f";

  console.log(url);

  request({ url, json: true }, (error, { body }) => {
    const data = body.current;
    if (error) {
      //   console.log("Something is wrong");
      callback("Unable to connect", undefined);
    } else if (body.error) {
      callback(body.error.type, undefined);
    } else {
      callback(
        undefined,
        "It is currently " +
          data.temperature +
          " degree out there. There is " +
          data.precip +
          "% chances of rain"
      );
    }
  });
};

module.exports = forecast;
