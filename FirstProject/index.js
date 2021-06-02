//const express = require('express');
//console.log(express);

//const priceGen = require ('./math');
//console.log(priceGen(20));

const express = require('express');

const app = express();

app.get('/',function(request,response){
    response.send("Hello, I received your request");
    });

app.post('/products',function(request,response){
    response.send("Hello, I received your  product request");
        });

app.put('/products',function(request,response){
    response.send("Hello, I received your request");
});

app.delete('/',function(request,response){
    response.send("Hello, I received your request");
});

app.listen(3000,function(){
    console.log("App listening at port 3000");
})