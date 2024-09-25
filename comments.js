// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Read comments.json file
var comments = require('./comments.json');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Get comments
app.get('/comments', function (req, res) {
  res.json(comments);
});