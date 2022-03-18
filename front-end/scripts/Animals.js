import {LivingBeing} from "./LivingBeing.js"


class Animal extends LivingBeing{
    constructor(param){
        super(param); // Envoie les paramètre à la classe parent LivingBeing

        this.cage =  param["cage"] ? param["cage"] : "bois"; //Type de Cage
        this.type =  param["type"] ? param["type"] : "terrestre"; // Terrestre, marin ou volatile     
    }

}

class Omnivorous extends Animal{   
    constructor(param){
        super(param);
    }
}

class Carnivorous  extends Animal{
    constructor(param){
        super(param);
    }
    
    Growl(to){
        // Grogne(), tous les humains aux alentours gagnent un point d'humeur        
    }
}

class Herbivorous extends Animal{
    constructor(param){
        super(param);
    }

    Ruminate(){
        if(this.hunger >= 0){
            this.Die();
        }

        this.hunger--;
    }
}

class Monkey extends Herbivorous{

    constructor(param){
        super(param);
        this.className = 'monkey';
    }

    DebugInfo(){
        console.log("Le singe est un animal vicieux, il aime voler les clients du parc et leur jeter des pierres");
    }
}

class Spider extends Herbivorous{

    constructor(param){
        super(param);
        this.className = 'monkey';
    }


}


export {Monkey, Spider};