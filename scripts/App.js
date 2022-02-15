import {Herbivorous} from "./Animals.js";
import {Healer} from "./Healer.js";

console.log("App.js");
var vache = new Herbivorous({age : 78, cage : "acier trempé"}); 
// Pour instancier un animal on déclare l'objet auquel on passe pour argument un objet avec
// toutes les variables pour spécifier ses caractéristiques
// -> Plus d'information dans la classe parent

var healer = new Healer({available : 1, exp : 1});