const fs = require('fs');
const util = require('util');
const uuidv1 = require("uuid").v1;
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Notes {
  readNote() {
    return readFileAsync('./db.json', 'utf8');
  };

  writeNote(data) {
    return writeFileAsync('./db.json', JSON.stringify(data));
  };

  getNote() {
    readFileAsync('./db.json', 'utf8').then(data => {
      let notes;
        notes = [].concat(JSON.parse(data))
        return notes
    }).catch((error) =>  {
      let notes = [];
        return; 
    });
  };

  addNote(data) {
    const { title, text } = data
    if (!title || !text) {
      throw new Error('Please enter valid title and text.');
    }
    const complete = { title, text, id: uuidv1() }
    return this.getNote()
    .then(data => [...data, complete])
    .then(data => this.writeNote(data));
  };

  deleteNote(id) {
    return this.getNote()
    .then(data => data.filter(note => note.id !== id))
    .then(data => this.writeNote(data));
  }
};

module.exports = new Notes();