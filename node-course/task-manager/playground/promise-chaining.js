require("./mongoose");
const User = require("../src/models/users");

// 60fbad7f4ddb6306b8896e9c

// User.findByIdAndUpdate("60fbad7f4ddb6306b8896e9c", { age: 34 })
//   .then((response) => {
//     console.log(response);
//     return User.countDocuments({ age: 34 });
//   })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount("60fbad7f4ddb6306b8896e9c", 2)
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
