const express = require('express');

const app = express();

// Pug is express default template language

// Also known as jade (former name)

//install command - npm install pug --save

// Commenting for Pug!!
//const home = require('./home');
//const products = require('./products');

app.set('view engine','pug'); //setting view engine as pug

app.get('/',function(req,res){
    res.render('index',{mytitle: 'Hey', message: 'I like to code'});
});

app.get('/firstpage',function(req,res){
  res.render('myfirstpage',{mytitle: 'Hey', message: 'I like to code'});
});


//app.use('/',home);
//app.use('/myproducts',products);

//app.get('/',function(request, response){
  //  response.send('hello');
//});

//Get : / products - list all products
//Get : /prducts/id - details of a particular product
//post : /products - create a new product
//put  : /products/id - update the product by Id
//delete : /products/id - delete the product Id

app.listen(3002,function(){
    console.log('I am listening');
});