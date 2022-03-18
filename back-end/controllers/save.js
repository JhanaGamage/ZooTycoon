//          --------     Controlleurs    ----------
//  séparer la logique métier de nos routes en contrôleurs pour rendre le code plus lisible dans les routes et faciliter la maintenance

const express = require('express');
const router = express.Router();
// Importation des schémas pour envoyer des objets vers les collections de MongoDb
const {security, adultClient, childClient, healer, seller, gamePlay} = require('../schemas.js');

exports.saveGame = (req, res) => {
    express.json();
    console.log("Middleware de sauvegarde du jeu", req.body)

    const game = new gamePlay({
        ...req.body
    });
    console.log("Middleware de sauvegarde du jeu avant sauvegarde")

    game.router() // La base de données MongoDB est fractionnée en collections : le nom de la collection est défini par défaut sur le pluriel du nom du modèle. Ici, ce sera Things  .
      .then(() => res.status(201).json({ message: 'Partie enregistrée !'}))
      .catch(error => res.status(400).json({ error , message : "Echec de sauvegarde"}));

}; 


module.exports = router;