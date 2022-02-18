import { LivingBeing } from "./LivingBeing.js";

class Client extends LivingBeing{
    constructor(param){
        super(param);
        super.chanceFalling;
    }
    FallInsideEnclosure(min,max){
    min = Math.ceil(min); //Donne le minimum d'intervale
        max = Math.floor(max); //Donne le maximum d'intervale
        var chanceFalling = Math.floor(Math.random() * (max - min + 1) + min); //Donne un nombre aléatoire avec une intervale
        // console.log("chanceFalling: " + chanceFalling);
        return (chanceFalling); //Retourne les chances d'un client de tomber dans l'enclos 
    }
    FeedThemselves(){
        if (this.hunger > 4) {
            this.hunger = 0; //Remet la faim du client à 0
        }
        if (this.thirst > 2) {
            this.thirst = 0; //Remet la soif du client à 0
        }
    }
}

class HumanAdult extends Client{
    constructor(param){   
        super(param);                
    }

    
    BuySomenthing(obj){

        // Permet d'acheter quelque chose, un ticket ou un bonbon pour le donner à l'enfant
        // Achete quelque chose au stand le plus proche, si il s'agit d'un consommable il le stocke dans son inventaire

        // console.log("L'adulte vient d'acheter quelque chose");

    }  
}

class HumanChild extends Client{

    constructor(param){
        super(param);

        this.relative = param["relative"] ? param["relative"] : null; // L'enfant a-t-il un parent
        // L'enfant se trouve toujours avec son parent
        this.relative ? 
        console.log(this.name + "est l'enfant de " + this.relative.name) 
        : console.log("Attention " + this.name + " n'a pas de parents");

        this.Cry();
    }

    

    Cry(){
        // Pleurer()
        // Le parent doit acheter quelque chose à l'enfant pour qu'il arrête de pleurer au risque de provoquer une baston avec d'autres parents mécontents
        
        if(this.manager){    

            // var humanTriggered = this.manager.humans[Math.floor(Math.random() * this.manager.humans.length)];
            // console.log("Ce client n'apprécie pas vraiment que l'enfant se mette à pleurer " + humanTriggered)


            // humanTriggered.Attacks(this.relative);
        }
        
        console.log("Oh non !!! L'enfant se met à pleurer");
    }

    FallInsideEnclosure(){
        
        // L'enfant tombe dans l'enclos
        // L'animal l'attaque 
    }
}

export {Client, HumanAdult, HumanChild};