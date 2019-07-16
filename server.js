const express = require("express");
const mongoose = require("mongoose");
const mysql = require("mysql");
const cors = require("cors");
const requireDir = require("require-dir");

const app = express();
app.use(express.json());
app.use(cors());


// Iniciando o BD MONGODB
/*mongoose.connect(
  'mongodb://localhost:27017/nodeapi',
  {useNewUrlParser:true});*/

// Iniciando o BD MYSQL
  requireDir('./src/models/');

//const Product = mongoose.model('Product');

app.use('/api', require('./src/routes'));

app.listen(3001);