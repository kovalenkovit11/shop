const express = require('express');
const app = express();

const errorMidleware = require('./middlewares/errors')

app.use(express.json());

const products = require('./routes/product')
const auth = require('./routes/auth')
app.use('/api/v1', products);
app.use('/api/v1', auth);

app.use(errorMidleware);
module.exports = app

