const express = require("express");
require("./db/mongoose");
// const Task = require("./models/task");
const { request } = require("express");
const userRouter = require("./routers/userRoutes");
const taskRouter = require("./routers/taskRoutes");

const app = express();
const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   if (req.method === "GET") {
//     res.send("GET request are disbaled");
//   } else {
//     next();
//   }
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

// ------------------------------------------------------------Tasks----------------------------------------

app.listen(port, () => {
  console.log("Server is running on port " + port);
});

// const jwt = require("jsonwebtoken");

// const myFunction = async () => {
//   const token = jwt.sign({ _id: "1234" }, "thisismycourse", {
//     expiresIn: "0 seconds",
//   });
//   console.log(token);

//   const data = jwt.verify(token, "thisismycourse");
//   console.log(data);
// };

// myFunction();

const Task = require("./models/task");
const Users = require("./models/users");

const main = async () => {
  // const task = await Task.findById("611201f1754aab4a846bb334");
  // await task.populate("owner").execPopulate();
  // console.log(task.owner);

  const user = await Users.findById("6111fd0d4021ca5c8c40c404");
  await user.populate("Task").execPopulate();
  // console.log(user);
};

main();
