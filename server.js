const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const requireDir = require("require-dir");

const app = express();
app.use(express.json());
app.use(cors());


// Iniciando o BD
mongoose.connect(
  'mongodb://localhost:27017/nodeapi',
  {useNewUrlParser:true});

  requireDir('./src/models/');

//const Product = mongoose.model('Product');

app.use('/api', require('./src/routes'));

app.listen(3001);