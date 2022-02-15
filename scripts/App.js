import {Herbivorous, Monkey} from "./Animals.js"
import {HumanAdult, HumanChild } from "./Client.js";
import {Healer} from "./Healer.js";

var vache = new Herbivorous({age : 78, cage : "acier trempé", pv : 2000, hunger : 5}); 
// var jeanMichel = new HumanAdult({age : 125});
// console.dir(vache);


// Pour instancier un animal on déclare l'objet auquel on passe pour argument un objet avec
// toutes les variables pour spécifier ses caractéristiques
// -> Plus d'information dans la classe parent
var interval = 0;
var monHealer = new Healer({available : 1, exp : 1});


class ZooManager {

    constructor(humans = [], animals = [], stands = []){

        this.time = 0; // Temps en secondes 

        this.humans = humans;
        this.animals = animals;
        this.stands = stands;

        setInterval(this.Clock, 1000);

       
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
        console.log(interval)
       this.time++;

       interval++;

       if(interval > 2){
            monHealer.feed(vache);
            interval = 0;
       }   

       
    }
}

var manager = new ZooManager();