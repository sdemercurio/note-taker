// api route is for data
// helps determine what data the user sees as well as what data the user can post to our server.
const { an, gn, dn } = require("../db/notes");

module.exports = (app) => {
  app.get("/api/notes", (req, res) => {
    const an = gn();
    return res.json(an);
  });

  app.post("/api/notes", (req, res) => {
    const { title, text } = req.body;

    const postNote = an(title, text);

    return res.json(postNote);
  });

  app.delete("/api/notes/:id", (req, res) => {
    dn(req.params.id);

    return res.status(200).send();
  });
};