require("./mongoose");
const Task = require("../src/models/task");
const Users = require("../src/models/users");

// Task.findByIdAndDelete("6101932fc126fa4ea81516fa")
//   .then((response) => {
//     console.log(response);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: true });
  console.log("count is " + count);
  return count;
};

deleteTaskAndCount("6102f7096a817b35400e4705")
  .then((count) => {
    console.log(count);
  })
  .catch((error) => {
    console.log(error);
  });
