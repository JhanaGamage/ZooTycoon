/*
      Application Express pour récupérer une sauvegarde
*/

const express = require('express');
const router = express.Router();
const fetchCtrl = require('../controllers/fetch');
// Importation des schémas pour envoyer des objets vers les collections de MongoDb
const {security, adultClient, childClient, healer, seller, gamePlay} = require('../schemas.js');

router.post('/OneSave', fetchCtrl.fetchOneSave); 
router.get('/AllGamesFromUser', fetchCtrl.fetchAllGamesFromUser);
router.get('/AllSaves', fetchCtrl.fetchAllSaves); 

module.exports = router;