// load json

// get note

// add note

//delete note

const fs = require("fs");
const path = require("path");
const uuidv1 = require("uuid").v1;

const writeToDB = note => {
  try {
    fs.writeFileSync(path.resolve(__dirname, "db.json"), JSON.stringify(note), {
      encoding: "utf8"
    });
  } catch (error) {
    throw new Error(error);
  }
  return true;
};

const deleteNote = noteID => {
  const an = getNotes();

  const ln = an.filter(({ id }) => id !== noteID);

  writeToDB(ln);
  return;
};

const addNote = (title, text) => {
  const en = getNotes();
  const cn = { title, text, id: uuidv1() };
  const rn = [cn, ...en];
  console.log("updated notes: ", rn);
  writeToDB(rn);
  return cn;
};

const getNotes = () => {
  const an = fs.readFileSync(path.resolve(__dirname, "db.json"));
  return JSON.parse(an.toString("utf8"));
};

module.exports = {
  addNote,
  getNotes,
  deleteNote
};