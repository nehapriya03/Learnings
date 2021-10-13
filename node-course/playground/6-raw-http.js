const http = require("http");

const url =
  "http://api.weatherstack.com/current?access_key=1e2fae27ba2c080faf03a80e59bb6749&query=39.6157556,-84.206229&unites=f";

const request = http.request(url, (response) => {
  let data = "";

  response.on("data", (chunks) => {
    data = data + chunks.toString();
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", () => {
  console.log("A error occured", error);
});

request.end();
