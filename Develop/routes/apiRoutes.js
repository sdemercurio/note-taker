// api route is for data
// helps determine what data the user sees as well as what data the user can post to our server.

const router = require('express').Router();
const noteStorage = require('../db/notes');


// "get" reads notes from the db.json file
router.get('/notes', (req, res) => {
    noteStorage
        .getNotes()
        .then((notes) => {
            return res.json(notes);
        })
        .catch((err) => res.status(500).json(err));
});

// // post recieves notes
// router.post('/notes', (req, res) => {
//     noteStorage
//     .addNote(req.body)
//     .then((noteStorage) => res.json(noteStorage))
//     .catch((err) => res.status(500).json(err));
// });

// router.delete('/notes/:id', (req, res) => {
//     noteStorage
//         .removeNote(req.params.id)
//         .then(() => res.json( { ok: true}))
//         .catch((err) => res.status(500).json(err));
// });

module.exports = router;