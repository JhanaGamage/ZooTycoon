/*
      Application Express
*/

const express = require('express');

const app = express(); 


// Middlewares :
// Attention certains middlewares peuvent en bloquer d'autres



app.use((req, res, next) => {
      console.log("Middleware")


      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
      res.setHeader('Access-Control-Allow-Methods', 'POST, PUT, DELETE, PATCH, OPTIONS');

      next();
}); // Autorise CORS


app.post('/saveGuardian', (req, res, next) => {
    
    //express.bodyParser()
    console.log("Middleware de sauvegarde du guardien")

    res.json({message : "Votre 2ème requête a bien été reçu"});
    const guard = new securityObj({
      ...req.body
    });

    guard.save() // La base de données MongoDB est fractionnée en collections : le nom de la collection est défini par défaut sur le pluriel du nom du modèle. Ici, ce sera Things  .
      .then(() => res.status(201).json({ message: 'Guardien enregistré !'}))
      .catch(error => res.status(400).json({ error }));

    next();
}); 





// app.use est un middleware. Un middleware est un bloc de code qui traite les requêtes et réponses de votre application.
// Il est possible d'appeler autant de middleware que l'on souhaite avec l'ajout d'une fonction next() en argument



app.use((req, res, next) => {
   res.json({message : "Votre dernière requête a bien été reçu"});
  // next();
}); 



module.exports = app;