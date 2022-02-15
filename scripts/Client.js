import { LivingBeing } from "./LivingBeing.js";

class Client extends LivingBeing{
    constructor(param){
        super(param);
    }
}

class HumanAdult extends Client{
    constructor(param)
    {   
        super(param);                
        
        setInterval(this.BuySomenthing, 2000);
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
    }

    

    Cry(){
        // Pleurer()
        // Le parent doit acheter quelque chose à l'enfant pour qu'il arrête de pleurer au risque de provoquer une baston avec d'autres parents mécontents
        
        
        console.log("Oh non !!! L'enfant se met à pleurer");
    }

    FallInsideEnclosure(){
        // L'enfant tombe dans l'enclos
        // L'animal l'attaque 
    }
}

export {Client, HumanAdult, HumanChild};