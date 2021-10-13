const sqaure = function (x) {
  return x * x;
};

const add = (x) => {
  return x + x;
};

console.log(sqaure(5));
console.log(add(5));

const events = {
  name: "My birthday party",
  guestList: ["me", "myself"],
  printGuestList: () => {
    console.log("This is my guest list for" + events.name);
    events.guestList.forEach((guest) => {
      console.log("object " + guest + events.name);
    });
  },
};

events.printGuestList();
