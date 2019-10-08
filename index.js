// requiring node module
const express = require('express');
const path = require('path');

// importing routes
const INDEX = require('./routes');

//creating express app
let app = express();

// defining port number
const PORT = process.env.PORT || 80;

// public directory setup
app.use(express.static(path.join(__dirname, 'public')));

// view directory setup
app.set('views', path.join(__dirname, 'views'));

// view engine setup
app.set('view engine', 'ejs');

// All the routing start from here
app.use('/', INDEX);

// assigning port number
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
