import {Monkey, Spider} from "./Animals.js";
import {HumanAdult, HumanChild } from "./Client.js";
import {Healer} from "./Healer.js";
import {SecurityGuard} from "./Security.js";
import {HumanStock} from "./Stock.js";
import { ApiCall } from "../src/ApiCall.js";

import axios from 'axios';

// Pour créer un animal on instancie l'objet auquel on passe pour argument un objet avec
// toutes les variables pour spécifier ses caractéristiques
// --> Plus d'information dans la classe parent

export class ZooManager {

    constructor(humans = [], animals = [], stands = [], zoo = {}){

        this.api = new ApiCall();

        this.interval = 0; // Temps
       
        this.zoo = zoo; // Sauvegarde de l'ensemble des objets
        
        // Lors de l'instanciation d'une classe, ne pas oublier de donner un nom
        
        //this.healer = new Healer({name : "Le soigneur", available : 1, exp : 1});
        //this.guard = new SecurityGuard({name : "Le guardien", available : 1, exp : 1});
        //this.client1 = new HumanAdult({age : 70, name : "Michou", inventory : {money : 150, creditCard : 1} });
        //this.client2 = new HumanAdult({age : 125, name : "Albert le gitan", inventory : {gun : 1, money : 0} });
        //this.ginette = new HumanChild({age : 2, name : "Ginette", relative : this.client1, manager : this});
        //this.stock = new HumanStock({foodStock : 100});
        //this.spider = new Spider({name : "Aragorn"});
        
        this.api.fetchSave();

        // Vérifier si l'objet est déjà présent grace à la clef puis l'ajouter ou modifier le précedent
        const gameplay={
            spiders : {aragorn : {name: 'aragorn'}, billy : {name: 'billy'}, hagrid : {name: 'hagrid'}}
        }
        console.log("formatted array from save :", this.FormatSave(gameplay.spiders))

        this.zoo={
            spiders: this.FormatSave(gameplay.spiders)
        }

          // this.api.save(this.DestructuringLocalSave());

        setInterval(() => this.Clock(), 1000); // Fonction de gestion du temps    
    }

    FormatSave(objects){
        const keys = Object.keys(objects);

        var formattedObjects = {};
        keys.forEach(key => {
            formattedObjects[key] = new Spider({...objects[key]});
        });

        return formattedObjects;
    }

    DestructuringLocalSave(){
        console.log("Déstructuration de la sauvegarde locale", this.zoo)
        var keys = Object.keys(this.zoo)

        console.log(keys, this.zoo)

        var formattedObjects = {};
        keys.forEach(key => {        
            // Boucle tous les objets 
            const currentObject = this.zoo[key];   console.log(currentObject)
            const paramsKeys = Object.keys(currentObject);
            var formattedObject = {};  
         

            paramsKeys.forEach(param => {
                // Boucle tous les paramètres de l'objet 
                formattedObject[param] = currentObject[param];
            });
            console.log(formattedObject)
            formattedObjects={...formattedObjects, [formattedObject.name]: formattedObject}
        });
        console.log(formattedObjects)

        console.log("Sauvegarde formatée pour l'envoi au serveur : ", formattedObjects)
        return formattedObjects;
    }
    

    AddToLocalDatabase(type = '',  objects = {}){
        if(!objects || !type) return;
        
        this.zoo = {...this.zoo, [type] : {...this.zoo[type], objects}};
        console.log(this.zoo);
        return;

        array.forEach(obj => {
            switch (type) {
                case 'animal':
                    this.animals.push(obj);
                    break;
                case 'human':       
                    this.humans.push(obj);   
                    break;
                case 'stand':
                    this.stands.push(obj);
                    break;
                default:
                    console.log(`L'objet ${obj} n'a pas pu être ajouté à la bdd locale.`);
              }
        });
    }

    GetAllObjectsOfType(type = ''){
        //console.log('Appel fonction GetAllObjects()')
        if(!type) return;
console.log(this.zoo)
        const objects = this.zoo[type];
        if(objects) return objects
        else console.log(`Le type suivant est incorrect : ${type}.`);
    }

    DeleteObjectFromLocalDatabase(name, type){
       delete this.zoo[type][name];
    }

   
    Clock(){
        // Gestion des événements en fonction du temps

        this.interval++; // L'intervale est incrémenté à chaque itération
        
        if(this.interval > 2){
            

          //  // Intervale pour le soigneur
          //  if (this.healer.health > 0) {
          //      this.healer.FeedItself(this.healer,this.stock); //Start function |FeedItself| des employés
          //      /////////// | A FINIR | this.stock.FoodAlert(this.stock) //Start function |FoodAlert| du stock          
          //      this.healer.feed(this.cow); //Start function |feed| du healer
          //      this.healer.heal(this.cow); //Start function |heal| du healer
          //      if (this.healer.HeartAttack(1,40,this.healer)){
          //          // console.log("Le soigneur a eu un infarctus");
          //      }
          //      // console.log("health Healer: " + this.healer.health);
          //  }            
//
          //  // Intervale pour le garde de sécurité    
          //  if (this.guard.health > 0) {
          //      this.guard.FeedItself(this.guard.hunger); //Start function |FeedItself| des employés
          //      this.guard.CleanCage(); //Start function |CleanCage| du gardien
          //      if (this.guard.level == 5) {
          //          // console.log(this.guard + " est niveau maximum");
          //      }
          //      else {
          //          if (this.guard.exp > 100) {
          //              this.guard.level++;
          //              this.guard.exp = 0;
          //              // console.log("Level Guard: " + this.guard.level);
          //          }
          //      }
          //      if (this.guard.HeartAttack(1,40,this.guard)){
          //          // console.log("Le garde a eu un infarctus.");
          //      }
          //      // console.log("health Guard: " + this.guard.health);
          //  }
          //  
          //  // Intervale pour le client adulte
          //  this.client1.FeedItself(); //Start function |FeedItself| du client1
          //  this.client2.FeedItself(); //Start function |FeedItself| du client2
          //  if (this.client1.health <= 0) {
          //      this.client = this.client2; //Si le client1 est mort, le client2 va sur le stand
          //  }
          //  else{
          //      this.client = this.client1; //Sinon le client1 est sur le stand
          //  }
//
          //  if (this.client.FallInsideEnclosure(1,5) == 4 && (this.client.health > 0 && this.guard.health > 0 && this.cow.health > 0)) {
          //      if (this.guard.exp >= 0 && this.guard.exp <= 100 && this.guard.level === 1) {
          //          this.guard.ProtectClientLvl1(1,10,this.cow,this.client,this.guard); //Start function |ProtectClient| du guard de lvl1 
          //      }
          //      if (this.guard.exp >= 0 && this.guard.exp <= 100 && this.guard.level === 2) {
          //          this.guard.ProtectClientLvl2(1,10,this.cow,this.client); //Start function |ProtectClient| du guard de lvl2   
          //      }
          //      if (this.guard.exp >= 0 && this.guard.exp <= 100 && this.guard.level === 3) {
          //          this.guard.ProtectClientLvl3(1,10,this.cow,this.client); //Start function |ProtectClient| du guard de lvl3   
          //      }
          //      if (this.guard.exp >= 0 && this.guard.exp <= 100 && this.guard.level === 4) {
          //          this.guard.ProtectClientLvl4(1,10,this.cow,this.client); //Start function |ProtectClient| du guard de lvl4   
          //      }
          //      if (this.guard.exp >= 0 && this.guard.exp <= 100 && this.guard.level === 5) {
          //          this.guard.ProtectClientLvl5(this.cow); //Start function |ProtectClient| du guard de lvl5   
          //      }
          //  }
         
            // console.log("Niveau d'EXP: " + this.guard.exp);
            this.interval = 0; 
        }   

        if(this.interval > 5){
            this.guard.CleanCage();

            this.interval = 0;
        }
    }      
    
}

