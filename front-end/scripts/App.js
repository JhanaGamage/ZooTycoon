import {Herbivorous, Monkey} from "./Animals.js"
import {HumanAdult, HumanChild } from "./Client.js";
import {Healer} from "./Healer.js";

var vache = new Herbivorous({age : 78, cage : "acier trempé", pv : 2000, hunger : 5}); 
// console.dir(vache);

// Pour instancier un animal on déclare l'objet auquel on passe pour argument un objet avec
// toutes les variables pour spécifier ses caractéristiques
// -> Plus d'information dans la classe parent

class ZooManager {

    constructor(humans = [], animals = [], stands = []){

        this.t = 0; // Temps en secondes 
        this.interval = 0;
        console.log(this.t)

        this.humans = humans;
        this.animals = animals;
        this.stands = stands;
        
        this.monHealer = new Healer({available : 1, exp : 1});
        this.jeanMichel = new HumanAdult({age : 125, name : "Michou", inventory : {money : 150, creditCard : 1} });
        this.ginette = new HumanChild({age : 2, name : "ginette", relative : this.jeanMichel, manager : this});
        this.albertLeG = new HumanAdult({age : 125, name : "Albert le gitan", inventory : {gun : 1, money : 0} });
        
        manager.AddHuman(this.jeanMichel);        
        manager.AddHuman(this.albertLeG);


        setInterval(() => this.Clock(), 600); // Lance la fonction de temps
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

    static Test(){
        console.log("TEEESSST")
    }

    TriggerHuman(human){
        
    }

    FindRandomHumain(){

    }
   
    Clock(){
         
        this.t++;        
        this.interval++;

       if(this.interval > 2){
            monHealer.feed(vache);
            this.interval = 0;
       }   
    }
}

var manager = new ZooManager();
manager.Clock();





ZooManager.Test();