/*
      Application Express pour sauvegarder
*/

const express = require('express');
const router = express.Router();
const saveCtrl = require('../controllers/fetch');
// Importation des schémas pour envoyer des objets vers les collections de MongoDb
const {security, adultClient, childClient, healer, seller, gamePlay} = require('../schemas.js');

router.post('/saveGame', saveCtrl.saveGame); 

module.exports = router;