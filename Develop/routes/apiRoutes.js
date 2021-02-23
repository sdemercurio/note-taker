const router = require('express').Router();
const noteStorage = require('../db/notes');


// "get" retrieves notes
router.get('/notes', (req, res) => {
    noteStorage
        .getNotes()
        .then((notes) => {
            return res.json(notes);
        })
        .catch((err) => res.status(500).json(err));
});