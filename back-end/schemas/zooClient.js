const mongoose = require('mongoose');

const zooClientSchema = mongoose.Schema({
    name : {type: String, required: true},      
    available : { type: Boolean, required: true }, 
    experience : { type: Number, required: true },     
    pv : { type: Number, required: true },
    mood : { type: Number, required: true },
    thirst : { type: Number, required: true },
    hunger : { type: Number, required: true },
    inventory : { type: Object, required: false },
    strength : { type: Number, required: true },
    relative : { type: Number, required : false}
});


module.exports = mongoose.model('ZooClient', zooClientSchema); // Transforme le modèle en modèle utilisable
//module.exports = securitySchema;