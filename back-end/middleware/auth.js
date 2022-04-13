const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try{
        console.log("middleware de sécurité d'authentification");

        const token = req.headers.authorization;


        const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
        const userId = decodedToken.userId;

        console.log(req.body.userId, userId);
        if(req.body.userId && req.body.userId !== userId) {throw 'Id non valable'}
        else  { console.log("Authentifié"); next();}
    }
    catch (error) {
        console.log("Requête non authentifiée", error);
        res.status(401).json({error: "Requête non authentifiée"});
    }
}