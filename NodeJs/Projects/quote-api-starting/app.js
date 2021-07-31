const express = require('express');
const quotesRouter = require('./quotes');
const app = express();

app.use('/quotes',quotesRouter)

module.exports = app;