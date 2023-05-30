const express = require('express');
const app = express();

const errorMidleware = require('./middlewares/errors')

app.use(express.json());

const products = require('./routes/product')
app.use('/api/v1', products);

app.use(errorMidleware);
module.exports = app

