import {Herbivorous, Monkey} from "./Animals.js"
import {HumanAdult, HumanChild } from "./Client.js";
import {Healer} from "./Healer.js";

var vache = new Herbivorous({age : 78, cage : "acier trempé", pv : 2000, hunger : 5}); 
// console.dir(vache);

// Pour instancier un animal on déclare l'objet auquel on passe pour argument un objet avec
// toutes les variables pour spécifier ses caractéristiques
// -> Plus d'information dans la classe parent

class ZooManager {

    constructor(titi = 0, humans = [], animals = [], stands = []){

        this.t = 0; // Temps en secondes 
        this.interval = 0;
        console.log(this.t)

        this.humans = humans;
        this.animals = animals;
        this.stands = stands;

        setInterval(() => this.Clock(), 600);
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

    FindRandomHumain(){

    }
   
    Clock(){
         
        this.t++;
           
        console.log(this.t);

       this.interval++;

       if(this.interval > 2){
            monHealer.feed(vache);
            this.interval = 0;
       }   
    }
}

var manager = new ZooManager();
manager.Clock();

var monHealer = new Healer({available : 1, exp : 1});
var jeanMichel = new HumanAdult({age : 125, name : "Michou"});
var ginette = new HumanChild({age : 2, name : "ginette", relative : jeanMichel});
var albertLeG = new HumanAdult({age : 125, name : "Albert le gitan"});
manager.AddHuman(jeanMichel);
manager.AddHuman(albertLeG);