//          --------     Controlleurs    ----------
//  séparer la logique métier de nos routes en contrôleurs pour rendre le code plus lisible dans les routes et faciliter la maintenance

const express = require('express');
const router = express.Router();
// Importation des schémas pour envoyer des objets vers les collections de MongoDb
const {security, adultClient, childClient, healer, seller, gamePlay} = require('../schemas.js');

router.fetchOneSave =  (req, res) => {   
  console.log("fetch router :", req.body) 
  gamePlay.findOne({ _id: req.body.id} )
  .then(file => res.status(200).json({ message: 'Partie réupérée !'}))
  .catch(error => res.status(400).json({ error }));
}; 

router.fetchAllGamesFromUser = (req, res) => {    
    console.log("find all saves from user")

    security.aggregate([{
          $group: resources // Récumpère la collection Securities
      }, {
          $lookup: {
              from: "healers", // Collection à joindre
              as: "healers"// Nom de l'array de sortie
          }
      }, {
          $lookup: {
              from: "adultClients", 
              as: "adultClients"
          }
      }, {
        $lookup: {
            from: "childClients", 
            as: "childClients"
        }
      }, {
        $lookup: {
            from: "sellers", 
            as: "sellers"
        }
      }],function (error, data) {
          return res.json(data);
    });
}; 

router.fetchAllSaves =  (req, res) => {    
  console.log("fetch game play")
  gamePlay.find()
  .then(routers => res.status(200).json(routers))
  .catch(error => res.status(400).json({ error }));
}; 

module.exports = router;