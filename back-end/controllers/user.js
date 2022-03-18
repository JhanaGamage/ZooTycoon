//          --------     Controlleurs    ----------
//  séparer la logique métier de nos routes en contrôleurs pour rendre le code plus lisible dans les routes et faciliter la maintenance

const express = require('express');
const router = express.Router();
// Importation des schémas pour envoyer des objets vers les collections de MongoDb
const {user} = require('../schemas.js');

exports.signup = (req, res, next) => {

};

exports.login = (req, res, next) => {

};

module.exports = router;