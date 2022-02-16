/*
      Application Express
*/

const express = require('express');
const app = express();


app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
      next();
}); // Autorise CORS

app.use((req, res, next) => {
   res.json({message : "Votre requête a bien été reçu"});
   next();
}); // app.use est un middleware. Un middleware est un bloc de code qui traite les requêtes et réponses de votre application.
// Il est possible d'appeler autant de middleware que l'on souhaite avec l'ajout d'une fonction next() en argument

app.use((req, res, next) => {
    res.json({message : "Votre 2ème requête a bien été reçu"});
    next();
}); 

app.use((req, res) => {
   res.status(201); // Change le statut/code d'état de la requête
});




module.exports = app;