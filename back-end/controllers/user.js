//          --------     Controlleurs    ----------
//  séparer la logique métier de nos routes en contrôleurs pour rendre le code plus lisible dans les routes et faciliter la maintenance

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

// Importation des schémas pour envoyer des objets vers les collections de MongoDb
const {user} = require('../schemas.js');

router.signup = (req, res) => {
   
    bcrypt.hash(req.body.password, 10)
    .then(hash => {

      const newUser = new user({
        name: req.body.name,
        mail: req.body.mail,
        password: hash
      });

      newUser.save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch(error => res.status(400).json({ error }));
        
    })
    .catch(error => res.status(500).json({ error }));
 
};

router.login = (req, res) => {
    User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(401).json({ error: 'Utilisateur non trouvé !' });
      }
      bcrypt.compare(req.body.password, user.password)
        .then(valid => {
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
          }
          res.status(200).json({
            userId: user._id,
            token: 'TOKEN'
          });
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

module.exports = router;