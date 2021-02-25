const fs = require('fs');
const util = require('util');
const uuidv1 = require("uuid").v1;
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Notes {
  rn() {
    return readFileAsync('./db.json', 'utf8');
  };

  wn(data) {
    return writeFileAsync('./db.json', JSON.stringify(data));
  };

  gn() {
    readFileAsync('./db.json', 'utf8').then(data => {
      let notes;
        notes = [].concat(JSON.parse(data))
        return notes
    }).catch((error) =>  {
      let notes = [];
        return; 
    });
  };

  an(data) {
    const { title, text } = data
    if (!title || !text) {
      throw new Error('Please enter valid title and text.');
    }
    const complete = { title, text, id: uuidv1() }
    return this.gn()
    .then(data => [...data, complete])
    .then(data => this.wn(data));
  };

  dn(id) {
    return this.gn()
    .then(data => data.filter(note => note.id !== id))
    .then(data => this.write(data));
  }
};

module.exports = new Notes();