const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });
  const duplicateNote = notes.find((note) => {
    note.title = title;
  });

  // debugger;

  // if (duplicateNotes.length === 0) {
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log(notes);
  } else {
    console.log("Note title taken");
  }
};

const deleteNotes = (title) => {
  const notes = loadNotes();
  const noteToKeep = notes.filter((note) => {
    return note.title === title;
  });

  if (notes.length > noteToKeep.length) {
    console.log(chalk.bgGreen("Note removed!"));
    saveNotes(noteToKeep);
  } else {
    console.log(chalk.bgRed("No note is  removed!"));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  notes.forEach((note) => {
    console.log(chalk.green.inverse(note.title));
    console.log(chalk.red.inverse(note.body));
  });
  console.log(notes);
};

const readNotes = (title) => {
  const notes = loadNotes();
  const noteToRead = notes.find((note) => {
    return note.title === title;
  });

  if (noteToRead) {
    console.log(chalk.inverse(noteToRead.title));
    console.log(noteToRead.body);
  } else {
    console.log(chalk.inverse.red("No note was found"));
  }
  // console.log(noteToRead);
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = (title) => {
  try {
    const databuffer = fs.readFileSync("notes.json");
    const dataJSON = databuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  addNote: addNote,
  deleteNotes: deleteNotes,
  listNotes: listNotes,
  readNotes: readNotes,
};
