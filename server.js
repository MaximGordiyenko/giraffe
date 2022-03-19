const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const users = require('./data.json');
const products = require('./products.json');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/users', (req, res) => {
  res.send(users);
});

app.get('/products', (req, res) => {
  res.send(products)
});

app.listen(4000, () => {
  console.log('Server: 4000');
});