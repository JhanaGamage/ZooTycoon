/*
      Application Express
*/

const express = require('express');
const app = express();
const saveRoutes = require('./routes/save');
const fetchRoutes = require('./routes/fetch');
const userRoutes = require('./routes/user');

// Middlewares :
// Attention certains middlewares peuvent en bloquer d'autres comme GET sur POST

// app.use est un middleware. Un middleware est un bloc de code qui traite les requêtes et réponses de votre application.
// Il est possible d'appeler autant de middleware que l'on souhaite avec l'ajout d'une fonction next() en argument

app.use((req, res, next) => { // Autorise CORS
      console.log("Middleware d'autorisation du CORS");

      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');

      next();
}); 

app.use(express.json()); // Express prend toutes les requêtes qui ont comme Content-Type  application/json  et met à disposition leur  body  directement sur l'objet req, ce qui nous permet d'écrire le middleware POST suivant :

app.use('/api/save/', saveRoutes);

app.use('/api/fetch/', fetchRoutes); 

app.use('/api/auth', userRoutes);

module.exports = app;