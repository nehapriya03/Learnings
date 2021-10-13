// const firstName = require("./utils");
const notes = require("./notes");
const chalk = require("chalk");
const yargs = require("yargs");
const { argv } = require("yargs");

// const command = process.argv[2];

// if (command === "add") {
//   console.log("Adding note");
// } else if (command === "remove") {
//   console.log("This is removed");
// }

// // console.log(process.argv[2]);

// Customize yargs version
// yargs.version("1.0.0");

//create add command

yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: function () {
    notes.addNote(argv.title, argv.body);
    console.log("Adding a new note");
  },
});

// create remove command

// yargs.command({
//   command: "remove",
//   describe: "Remove a note",
//   handler: function () {
//     console.log("Removing a note");
//   },
// });

// craete a list command

yargs.command({
  command: "list",
  describe: "List a note",
  builder: {
    title: {
      describe: "Note title",
      // demandOption: true,
      type: "string",
    },
    body: {
      description: "This is body",
      // demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.listNotes();
    console.log("This is from console");
  },
});

// create a read command

yargs.command({
  command: "read",
  describe: "read a note",
  builder: {
    title: {
      describe: "This is a read node",
      demandOPtion: false,
      type: "string",
    },
    body: {
      describe: "This is read body",
      demandOPtion: false,
      type: "string",
    },
  },
  handler: function () {
    notes.readNotes(argv.title);
    // console.log("Title");
  },
});

// add, remove, read, list

// console.log(yars.argv);

// console.log(process.argv);

// console.log(yargs.argv);

yargs.command({
  command: "remove",
  describe: "remove a notes",
  builder: {
    title: {
      describe: "Note title",
      demandOPtion: true,
      type: "string",
    },

    body: {
      description: "Note body",
      demandOPtion: true,
      type: "string",
    },
  },

  handler(argv) {
    // console.log("This is from console of App.js");
    notes.deleteNotes(argv.title);
  },
});

yargs.parse();
