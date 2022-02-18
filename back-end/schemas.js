const mongoose = require('mongoose');


const securitySchema = mongoose.Schema({
    name : {type: String, required: true},      
    available : { type: Boolean, required: true }, 
    experience : { type: Number, required: true },     
    pv : { type: Number, required: true },
    mood : { type: Number, required: true },
    thirst : { type: Number, required: true },
    hunger : { type: Number, required: true },
    inventory : { type: Object, required: true },
    strength : { type: Number, required: true },
});

const zooClientSchema = mongoose.Schema({
    name : {type: String, required: true},      
    available : { type: Boolean, required: true }, 
    experience : { type: Number, required: true },     
    pv : { type: Number, required: true },
    mood : { type: Number, required: true },
    thirst : { type: Number, required: true },
    hunger : { type: Number, required: true },
    inventory : { type: Object, required: true },
    strength : { type: Number, required: true },
});

const healerSchema = mongoose.Schema({
    name : {type: String, required: true},      
    available : { type: Boolean, required: true }, 
    experience : { type: Number, required: true },     
    pv : { type: Number, required: true },
    mood : { type: Number, required: true },
    thirst : { type: Number, required: true },
    hunger : { type: Number, required: true },
    inventory : { type: Object, required: true },
    strength : { type: Number, required: true },
});




module.exports = mongoose.model('Security', securitySchema); // Transforme le modèle en modèle utilisable