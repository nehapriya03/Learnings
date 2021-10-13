// setTimeout(() => {
//   console.log("Two secons are up");
// }, 2000);

// const names = ["me", "myself"];
// const shortNames = names.filter((name) => {
//   return name.length <= 4;
// });

const getcode = (address, callback) => {
  setTimeout(() => {
    const data = {
      lonitude: 0,
      latitude: 10,
    };

    callback(data);
  }, 2000);
};

const data = getcode("philadelphia", (data) => {
  console.log(data);
});

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

// add(1, 4, (sum) => {
//     console.log(sum) // Should print: 5
// })

// const add = (number1, number2, callback) => {
//   setTimeout(() => {
//     console.log("Two seconds are up");
//     callback(number1 + number2);
//   }, 2000);
// };

// const sum = (number1, number2) => {
//   const addi = number1 + number2;
//   console.log(addi);
// };

// const data = add(1, 4, (sum) => {
//   console.log(sum);
// });
