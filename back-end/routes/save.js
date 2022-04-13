/*
      Application Express pour sauvegarder
*/

const express = require('express');
const router = express.Router();
const saveCtrl = require('../controllers/save');
const auth = require('../middleware/auth')
// Importation des schémas pour envoyer des objets vers les collections de MongoDb
const {security, adultClient, childClient, healer, seller, gamePlay} = require('../schemas.js');

router.post('/saveGame', auth, saveCtrl.saveGame); 

module.exports = router;