// api route is for data
// helps determine what data the user sees as well as what data the user can post to our server.
const { addNote, getNotes, deleteNote } = require("../db/notes");

module.exports = function(app) {
  app.get("/api/notes", function(req, res) {
    const an = getNotes();
    return res.json(an);
  });

  app.post("/api/notes", function(req, res) {
    const { title, text } = req.body;

    const postNote = addNote(title, text);

    return res.json(postNote);
  });

  app.delete("/api/notes/:id", function(req, res) {
    deleteNote(req.params.id);

    return res.status(200).send();
  });
};