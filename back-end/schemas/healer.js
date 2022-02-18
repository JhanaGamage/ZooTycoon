const mongoose = require('mongoose');

const healerSchema = mongoose.Schema({
    name : {type: String, required: true},      
    available : { type: Boolean, required: true }, 
    experience : { type: Number, required: true },     
    pv : { type: Number, required: true },
    mood : { type: Number, required: true },
    thirst : { type: Number, required: true },
    hunger : { type: Number, required: true },
    inventory : { type: Object, required: false },
    strength : { type: Number, required: true }
});


module.exports = mongoose.model('Healer', healerSchema); // Transforme le modèle en modèle utilisable
//module.exports = securitySchema;