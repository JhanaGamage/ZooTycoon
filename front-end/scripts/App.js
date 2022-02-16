import {Herbivorous, Monkey} from "./Animals.js"
import {HumanAdult, HumanChild } from "./Client.js";
import {Healer} from "./Healer.js";


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
        
        // Lors de l'instanciation d'une classe, ne pas oublier de donner un nom
        this.monHealer = new Healer({name : "Soigneur", available : 1, exp : 1});
        this.jeanMichel = new HumanAdult({age : 125, name : "Michou", inventory : {money : 150, creditCard : 1} });
        this.ginette = new HumanChild({age : 2, name : "ginette", relative : this.jeanMichel, manager : this});
        this.albertLeG = new HumanAdult({age : 125, name : "Albert le gitan", inventory : {gun : 1, money : 0} });
        this.vache = new Herbivorous({name: "La vache", age : 78, cage : "acier trempé", pv : 20, hunger : 0}); 

        this.AddHuman(this.jeanMichel);        
        this.AddHuman(this.albertLeG);


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
            this.monHealer.feed(this.vache);
            this.monHealer.heal(this.vache);
            this.interval = 0;
       }   
    }
}

var manager = new ZooManager();
manager.Clock();





ZooManager.Test();