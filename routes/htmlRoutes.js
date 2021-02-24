// html routes help direct the user

const path = require('path');


module.exports = (app) => {


    // when the user hits "Get Started" they are directed to notes.html
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});


// Directs user home
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});
}