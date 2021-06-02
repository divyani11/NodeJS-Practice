const express = require('express');
const app = express();

//creating mongoclient to connect to DB
const mongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const port = 3003;
const dburl = "mongodb://localhost:27017";

// added after installing body parser
const bodyParser = require('body-parser');
const urlEncodedParser = bodyParser.urlencoded({extended:false});

mongoClient.connect(dburl,function(err,client){
    console.log('Connected with DB');
})

const superheroes = [
        {id:1, name: 'spider man'},
        {id:2, name: 'captain america'},
        {id:3, name: 'iron man'}
];
    app.set('view engine', 'pug');
    app.use(express.static('public'));

    app.get('/',function(req,res){

        //showing data from MongoDB Database
        mongoClient.connect(dburl,function(err,client){
            //if(err != null){
               // console.log(err.message);
          //  }
            
            const myDatabase = client.db('comics');
            const myCollection = myDatabase.collection('superheroes');

            myCollection.find({}).toArray((err,documents)=>{
                console.log(documents);
                client.close();
                res.render('index',{documents});
            });
        });
        //res.render('index',{superheroes: superheroes});
   });


    
    app.get('/superheroes/:id',function(req,res){
        const selectedId = req.params.id;

        //Getting the ID data from database
        mongoClient.connect(dburl,function(err,client){
            //if(err != null){
               // console.log(err.message);
          //  }
            
            const myDatabase = client.db('comics');
            const myCollection = myDatabase.collection('superheroes');
            const filter = {_id: ObjectID(selectedId)};

            myCollection.find(filter).toArray((err,documents)=>{
                var selectedSuperHero = documents[0];
                client.close();
                res.render('superhero',{superhero:selectedSuperHero});
                });
            });
        });
    //     let selectedSuperHero = superheroes.filter(superhero =>{
    //         return superhero.id === +selectedid;
    //     });
    //     selectedSuperHero = selectedSuperHero[0];
    //     res.render('superhero',{superhero:selectedSuperHero}) 
    // });   

    // app.get('test',()=>{
    //     res.render('superhero',{superhero:{id:1,name:'test'}});
    // });

    app.post('/superheroes',urlEncodedParser,function(req,res){
      //  const  newId = superheroes[superheroes.length-1].id + 1;
        const newSuperHero =
        {
           // id:newId,
            name: req.body.suprehero, // use same that is given to an element in create.pug file
            description: req.body.description
        }
        mongoClient.connect(dburl,function(err,client){
            //if(err != null){
               // console.log(err.message);
          //  }
            
            const myDatabase = client.db('comics');
            const myCollection = myDatabase.collection('superheroes');
        
            myCollection.insertOne(newSuperHero,(err,result)=>{
                client.close();
                res.redirect('/');
        });
        //res.render('index',{superheroes: superheroes});
   });
});

        //superheroes.push(newSuperHero);
        //res.redirect('/');
    
    app.listen(port,() => {
        console.log(`Server running on port ${port}`);

    });