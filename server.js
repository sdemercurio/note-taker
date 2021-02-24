
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3020;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serve images, CSS files, and JavaScript files in a directory named public
app.use(express.static(__dirname + "/public"));


require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);



app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});