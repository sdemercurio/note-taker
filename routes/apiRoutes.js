const { an, gn, dn } = require("../db/notes");
//const readFileAsync = util.promisify(fs.readFile);
const fs = require('fs');
const { deepStrictEqual } = require("assert");
const path = require('path')

module.exports = function(app) {
  app.get("/api/notes", function(req, res) {
   // const an = gn();
   // return res.json(an);
   // console.log(an); 
  //  readFileAsync('./db.json', 'utf8').then(data => {
  //   let notes;
  //     notes = [].concat(JSON.parse(data))
  //     return notes
  // }).catch((error) =>  {
  //   let notes = [];
  //     return; 
  // });
 // let data =  fs.readFileSync(path.join(__dirname , '../db/db.json'), 'utf-8')
  fs.readFile(path.join(__dirname , '../db/db.json'),'utf-8',(err, data) => {
    if(err)throw err

    console.log(data); 
    console.log('hello')
    res.json(data); 
  })
  
  });

  app.post("/api/notes", function(req, res) {
    const { title, text } = req.body;

    const postNote = an(title, text);

    return res.json(postNote);
  });

  app.delete("/api/notes/:id", function(req, res) {
    dn(req.params.id);

    return res.status(200).send();
  });
};