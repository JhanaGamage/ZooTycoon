import {ZooManager} from "./ZooManager.js";
import {Herbivorous, Monkey} from "./Animals.js"
import {HumanAdult, HumanChild } from "./Client.js";
import {Healer} from "./Healer.js";

var vache = new Herbivorous({age : 78, cage : "acier trempé"}); 
var jeanMichel = new HumanAdult({age : 125});

var manager = new ZooManager();




console.dir(vache);
// Pour instancier un animal on déclare l'objet auquel on passe pour argument un objet avec
// toutes les variables pour spécifier ses caractéristiques
// -> Plus d'information dans la classe parent

var healer = new Healer({available : 1, exp : 1});



class ZooManager {

    constructor(humans = [], animals = [], stands = []){

        this.time = 0; // Temps en secondes 
        this.interval = 0;

        this.humans = humans;
        this.animals = animals;
        this.stands = stands;

        setInterval(this.Clock, 1000);

        this.monHealer = new Healer({available : 1, exp : 1});
        this.maVache = new Herbivorous({age : 78, cage : "acier trempé"}); 
    }

    AddHuman(human){
        this.humans.push(human);        
    }

    AddAnimal(animal){
        this.animals.push(animal)
    }

    AddStand(stand){
        this.stands.push(stand)
    }

    TriggerHuman(human){
        
    }
   
    Clock(){
       this.time++;

       this.interval++;

       if(this.interval > 5)
       this.monHealer.feed(this.maVache);
       

       
    }
}
var healer = new Healer({available : 0, exp : 1});
