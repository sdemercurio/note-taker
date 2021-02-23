// html routes help direct the user

const path = require('path');


module.exports = (app) => {


    // whent he user hits 
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});
}