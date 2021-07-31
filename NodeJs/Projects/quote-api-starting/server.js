const express = require('express');
const api = require('./app');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));
app.use('/api',api)

app.listen(PORT,()=>{
    console.log(`server is running on PORT: ${PORT}`)
})