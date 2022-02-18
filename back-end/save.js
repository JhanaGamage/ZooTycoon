/*
      Application Express
*/

const express = require('express');
const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
const localMongoClient = new MongoClient('mongodb://localhost:27017');

// Importation des schémas pour envoyer des objets vers les collections de MongoDb
const securityObj = require('./schemas/security');
const zooClientObj = require('./schemas/zooClient');
const healerObj = require('./schemas/healer');

const save = express(); 

// Db Atlas link :
// mongodb+srv://Ja:LrB4MYsi6VCf0Aj5@cluster0.ome7t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect('mongodb://localhost:27017/ZooDb', // Etablit une connexion avec la bdd
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(err => console.log(err.reason));

// Middlewares :
// Attention certains middlewares peuvent en bloquer d'autres selon l'ordre comme les get et les post 


save.use((req, res, next) => {
    
    //express.bodyParser()
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');


    next();
}); 

save.use(express.json()); // Express prend toutes les requêtes qui ont comme Content-Type  application/json  et met à disposition leur  body  directement sur l'objet req, ce qui nous permet d'écrire le middleware POST suivant :

save.post('/saveGuardian', (req, res) => {
    express.json();
    console.log("Middleware de sauvegarde du guardien")

   // res.json({
   //     message : "Votre requête de sauvegarde du guardien a bien été reçu",
   //   //  body : req.body
   // });

    console.log(req.body);
    const guard = new securityObj({
        ...req.body
    });

    guard.save() // La base de données MongoDB est fractionnée en collections : le nom de la collection est défini par défaut sur le pluriel du nom du modèle. Ici, ce sera Things  .
      .then(() => res.status(201).json({ message: 'Guardien enregistré !'}))
      .catch(error => res.status(400).json({ error , message : "Echec de l'enregistrement du guardien"}));

}); 

save.get('/findAll', (req, res) => {    
  console.log("find")
    securityObj.find()
    .then(thing => res.status(200).json(thing))
    .catch(error => res.status(400).json({ error }));
}); 

save.get('/find/:id', (req, res) => {    
  securityObj.findOne({ _id: req.params.id } )
  .then(security => res.status(200).json(security))
  .catch(error => res.status(400).json({ error }));
}); 


module.exports = save;