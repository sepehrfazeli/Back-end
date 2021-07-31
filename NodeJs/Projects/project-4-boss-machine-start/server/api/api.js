const express = require('express');
const api = express();

const minionsRouter = require("./minions");
api.use('/minions',minionsRouter);

const ideasRouter = require("./ideas");
api.use('/ideas',ideasRouter);


const meetingsRouter = require("./meetings");
api.use('/meetings',meetingsRouter);


module.exports = api;
