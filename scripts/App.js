import {ZooManager} from "./ZooManager.js";
import {Herbivorous} from "./Animals.js"
import { HumanAdult } from "./Client.js";
import {Healer} from "./Healer.js";

var vache = new Herbivorous({age : 78, cage : "acier trempé"}); 
var jeanMichel = new HumanAdult({age : 125});

var manager = new ZooManager();




console.dir(vache);
// Pour instancier un animal on déclare l'objet auquel on passe pour argument un objet avec
// toutes les variables pour spécifier ses caractéristiques
// -> Plus d'information dans la classe parent

var healer = new Healer({available : 0, exp : 1});