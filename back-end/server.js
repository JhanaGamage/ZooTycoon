/*
       Serveur
*/ 

const http = require('http'); // A la différence de import en js, require provient de CommonJs, un module qui permet d'importer un fichier sans avoir à spécifier son chemin. Permet également d'omettre l'extension d'un fichier 
const app = require('./app'); // Récupération du fichier app.js avec notre application Express



const normalizePort = val => { // Renvoie un port valide
       const port = parseInt(val, 10);
     
       if (isNaN(port)) {
         return val;
       }
       if (port >= 0) {
         return port;
       }
       return false;
     };
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port); // Initialise l'application Express sur un port


const errorHandler = error => {
       if (error.syscall !== 'listen') {
         throw error;
       }
       const address = server.address();
       const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
       switch (error.code) {
         case 'EACCES':
           console.error(bind + ' requires elevated privileges.');
           process.exit(1);
           break;
         case 'EADDRINUSE':
           console.error(bind + ' is already in use.');
           process.exit(1);
           break;
         default:
           throw error;
       }
};



//const server = http.createServer((req, res) => {
//    res.end("Voilà la réponse");
//}); // Comporte une requête et une réponse

const server = http.createServer(app);

server.on('error', errorHandler);
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('Listening on ' + bind);
});

server.listen(port); // Vérifie si l'environnement sur lequel tourne notre serveur utilise un port sinon on utilisera par défaut le port 3000
// -> Ecoute des requêtes à partir d'un port

// Utilisation de l'outil Postman pour faire des tests de requêtes https://www.postman.com/
