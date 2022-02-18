import {Herbivorous, Monkey} from "./Animals.js"
import {HumanAdult, HumanChild } from "./Client.js";
import {Healer} from "./Healer.js";
import {SecurityGuard} from "./Security.js"


// Pour instancier un animal on déclare l'objet auquel on passe pour argument un objet avec
// toutes les variables pour spécifier ses caractéristiques
// -> Plus d'information dans la classe parent

class ZooManager {

    constructor(humans = [], animals = [], stands = []){

        this.t = 0; // Temps en secondes 
        this.interval = 0;
        this.humans = humans;
        this.animals = animals;
        this.stands = stands;
        
        // Lors de l'instanciation d'une classe, ne pas oublier de donner un nom
        this.monHealer = new Healer({name : "Soigneur", available : 1, exp : 1});
        this.guard = new SecurityGuard({name : "Guard", available : 1, exp : 1});
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

    static Test(){}

    TriggerHuman(human){
        
    }

    FindRandomHumain(){

    }
   
    Clock(){
        this.t++; //t monte de 1 à chaque tour de fonction  
        this.interval++; //L'intervale monte de 1 à chaque tour de fonction
        
        if(this.interval > 2){
            // Intervale pour le soigneur
            if (this.monHealer.pv > 0) {
                this.monHealer.FeedThemselves(this.monHealer.hunger); //Start function |FeedThemselves| des employés
                this.monHealer.feed(this.vache); //Start function |feed| du healer
                this.monHealer.heal(this.vache); //Start function |heal| du healer
                if (this.monHealer.HeartAttack(1,20,this.monHealer)){
                    console.log("Le soigneur a eu un infarctus");
                }
                console.log("PV Healer: " + this.monHealer.pv);
            }            

            // Intervale pour le garde de sécurité    
            if (this.guard.pv > 0) {
                this.guard.FeedThemselves(this.guard.hunger); //Start function |FeedThemselves| des employés
                this.guard.CleanCage(); //Start function |CleanCage| du gardien
                if (this.guard.level == 5) {
                    console.log(this.guard + " est niveau maximum");
                }
                else {
                    if (this.guard.exp > 100) {
                        this.guard.level++;
                        this.guard.exp = 0;
                        console.log("Level Guard: " + this.guard.level);
                    }
                }
                if (this.guard.HeartAttack(1,30,this.guard)){
                    console.log("Le garde a eu un infarctus.");
                }
                console.log("PV Guard: " + this.guard.pv);
            }
            
            // Intervale pour le client adulte
            if (this.jeanMichel.FallInsideEnclosure(1,5) == 4 && (this.jeanMichel.pv > 0 || this.guard.pv > 0)) {
                if (this.guard.exp >= 0 && this.guard.exp <= 100 && this.guard.level == 1) {
                    this.guard.ProtectClientLvl1(1,10,this.vache,this.jeanMichel,this.guard); //Lance la fonction |ProtectClient| du guard de lvl1   
                }
                if (this.guard.exp >= 0 && this.guard.exp <= 100 && this.guard.level == 2) {
                    this.guard.ProtectClientLvl2(1,10,this.vache); //Lance la fonction |ProtectClient| du guard de lvl2   
                }
                if (this.guard.exp >= 0 && this.guard.exp <= 100 && this.guard.level == 3) {
                    this.guard.ProtectClientLvl3(1,10,this.vache); //Lance la fonction |ProtectClient| du guard de lvl3   
                }
                if (this.guard.exp >= 0 && this.guard.exp <= 100 && this.guard.level == 4) {
                    this.guard.ProtectClientLvl4(1,10,this.vache); //Lance la fonction |ProtectClient| du guard de lvl4   
                }
                if (this.guard.exp >= 0 && this.guard.exp <= 100 && this.guard.level == 5) {
                    this.guard.ProtectClientLvl5(this.vache); //Lance la fonction |ProtectClient| du guard de lvl5   
                }
            }
         
// console.log("Niveau d'EXP: " + this.guard.exp);
            this.interval = 0; 
       }   
    }
}
var manager = new ZooManager();
manager.Clock();

ZooManager.Test();