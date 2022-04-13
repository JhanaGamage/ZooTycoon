//          --------     Controlleurs    ----------
//  séparer la logique métier de nos routes en contrôleurs pour rendre le code plus lisible dans les routes et faciliter la maintenance

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Importation des schémas pour envoyer des objets vers les collections de MongoDb
const {user} = require('../schemas.js');

router.signup = (req, res) => {
   
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
      bcrypt.compare(req.body.password, hash, function(err, result) {
        console.log("comparaison du mot de passe avec son hash", result);

        if (err) { throw (err); }
      });

      
      const newUser = new user({
        name: req.body.name,
        mail: req.body.mail,
        password: hash
      });

      console.log("Hash = ", hash)

      newUser.save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch(error => res.status(400).json({ error }));
        
    })
    .catch(error => res.status(500).json({ error }));
 
};

router.signin = (req, res) => {
    console.log("Login", req.body);

    user.findOne({ mail: req.body.mail })
    .then(userFound => {
      if (!userFound) {
        return res.status(401).json({ error: 'Utilisateur non trouvé !' });
      }


      bcrypt.compare(req.body.password, userFound.password)
        .then(valid => {
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !', sendPassword:req.body.password, passwordFound: userFound.password});
          }
          res.status(200).json({
            userId: userFound._id,
            token: jwt.sign(
              {userId: userFound._id},
              'RANDOM_TOKEN_SECRET',
              {expiresIn: "1h"}
            )
          });
        })
        .catch(error => res.status(500).json({ error : 'Impossible de comparer les hashs'}));
    })
    .catch(error =>  {console.log(error); res.status(500).json({ error : 'Erreur base de donnée'}) }) ;
};

module.exports = router;