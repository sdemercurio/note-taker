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

 //             REPLACE PROMISES THIS WAY

  fs.readFile(path.join(__dirname , '../db/db.json'),'utf-8',(err, data) => {
    if(err)throw err

    console.log(data); 
    console.log('hello')
    res.json(data); 
  })
  
  });

  app.post("/api/notes", function(req, res) {
    const { title, text } = req.body;

   // const postNote = addNote(title, text);
   fs.writeFile(path.join(__dirname , '../db/db.json'),JSON.stringify({title, text}), 'utf-8', () => {

   })

    //res.json(postNote);
    res.json({title, text})
  });

  app.delete("/api/notes/:id", function(req, res) {
    deleteNote(req.params.id);

    return res.status(200).send();
  });
};