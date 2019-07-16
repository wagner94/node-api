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
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'evan@admin94',
    database:'nodeapiDB'
  
  });

  connection.connect(function(error){
    if(!!error){
         console.log('Error');
    }else {
        console.log('Connected');
    }
 
 });  

  requireDir('./src/models/');

//const Product = mongoose.model('Product');

app.use('/api', require('./src/routes'));

app.listen(3001);