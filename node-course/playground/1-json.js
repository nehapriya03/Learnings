const fs = require("fs");
// const json1 = require("./1-json.json");

// const book = {
//   title: "This is a book",
//   author: "Neha",
// };

// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);

// fs.writeFileSync("1-json.json", bookJSON);

// const parsedJSON = JSON.parse(bookJSON);
// console.log(parsedJSON.author);

// const databuffer = fs.readFileSync("1-json.json");
// const dataJSON = databuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

const dataBuffer = fs.readFileSync("1-json.json");
console.log(dataBuffer);
const dataString = dataBuffer.toString();
console.log("This is data string " + dataString);

const user = JSON.parse(dataString);
console.log("This is parsed string " + user);
user.name = "Neha";
user.age = "30";

const userJSON = JSON.stringify(user);
console.log("This is stringify " + userJSON);

fs.writeFileSync("1-json.json", userJSON);
