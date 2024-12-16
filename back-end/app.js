const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const conn = require('./db/conn');

app.use(
    express.urlencoded({
      extended: true,
    })
);