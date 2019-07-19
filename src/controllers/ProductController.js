
const mongoose = require('mongoose');
const mysql = require('mysql');
const Product = mongoose.model('Product');




var connection = mysql.createPool({
  connectionLimit:50,
  host:'localhost',
  user:'root',
  password:'evan@admin94',
  database:'nodeapiDB'

});

/*connection.connect(function(error){
  if(!!error){
       console.log('Error');
  }else {
      console.log();
      
  }

});*/

module.exports = {
             async index(req,res){
             /* connection.query("SELECT * FROM nodeTable",function(error,rows,fiels){

                if(!!error){
                    console.log('Error');
                } else {
                    
                    console.log(rows[0].nome);
                    Response.send('Hello, '+ rows[0].nome);
                }    
              }); */
              connection.getConnection(function(error,tempCont){
                if(!!error){
                    tempCont.release();
                  console.log('error');
                }else{
                   console.log('connected');  
                   tempCont.query("SELECT *FROM nodeTable", function(error,rows,fields){
                   tempCont.release();
                   
                   if(!!error){
                     console.log('Error in the query');
                   }else{
                     //res.json(rows);
                     res.send('home');
                   } 
                   
                   
                   });
                }
                
                
                });
                 const {page = 1} = req.query;
                   const products = await Product.paginate({},{page:page, limit:10});
                     return res.json(products);
             },
             async store(req,res){
               const product = await Product.create(req.body);
               return res.json(product)
          },
          async show(req,res){
            const product = await Product.findById(req.params.id);
            return res.json(product)
         },
         async update(req,res){ 
           const product = await Product.findByIdAndModify(req.params.id,req.body,{new :true});
           return res.json(product)
        },
        async destroy(req,res){
           await Product.findByIdAndRemove(req.params.id);
          return res.send();
       }

};  