// Create the express router to handle our products requests

var express = require('express');
var router = express.Router();

//Get : / products - list all products
//Get : /prducts/id - details of a particular product
//post : /products - create a new product
//put  : /products/id - update the product by Id
//delete : /products/id - delete the product Id

router.get('/',function(req,res){
    res.send('On this call we list of products');
});

router.post('/:id',function(req,res){
    res.send('On this call will we create a product');
});

router.put('/:id',function(req,res){
    res.send('On this call we update a product');
});

router.delete('/:id',function(req,res){
    res.send('On this call we delete a product');
});


module.exports = router;