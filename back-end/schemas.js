const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator'); //mongoose-unique-validator is a plugin which adds pre-save validation for unique fields within a Mongoose schema.
const common = {
    name : {type: String, required: true}, 
    partyId : {type: String, required: true},      
    available : { type: Boolean}, 
    experience : { type: Number},     
    health : { type: Number},
    mood : { type: Number},
    thirst : { type: Number},
    hunger : { type: Number},
    inventory : { type: Object},
    strength : { type: Number},
};


const gamePlaySchema = mongoose.Schema({
    userId : {type: String, required: true}, 
    partyId : {type: String, required: true},      
    adultClients : { type: Object}, 
    childClients : { type: Object}, 
    securities : { type: Object}, 
    stands : { type: Object}, 
    monkeys : { type: Object},
    spiders : {type: Object},
    cows : { type: Object}, 
});

const userSchema = mongoose.Schema({
    name : {type: String},      
    mail : {type: String, required: true, unique: true},     
    password : {type: String},     
});

userSchema.plugin(uniqueValidator);

// ------------------------------
//           Humans
// ------------------------------

// Employés:

const securitySchema = mongoose.Schema({
    ...common,
});

const healerSchema = mongoose.Schema({
    ...common,
});

const sellerSchema = mongoose.Schema({
    ...common,
});

// Clients :
const adultClientSchema = mongoose.Schema({
    ...common,
});

const childClientSchema = mongoose.Schema({
    ...common,
    relative : { type: Number, required: true },
});




// ------------------------------
//           Animals
// ------------------------------


const monkeySchema = mongoose.Schema({
   ...common,
});



// ------------------------------
//           Stands
// ------------------------------



const security = mongoose.model('Security', securitySchema); // Transforme le modèle en modèle utilisable
const adultClient = mongoose.model('AdultClient', adultClientSchema); 
const childClient = mongoose.model('ChildClient', childClientSchema); 
const healer = mongoose.model('Healer', healerSchema); 
const seller = mongoose.model('Seller', sellerSchema); 

const user = mongoose.model('User', userSchema); 
const gamePlay = mongoose.model('GamePlay', gamePlaySchema); 



module.exports = {security, adultClient, childClient, healer, seller, gamePlay, user};