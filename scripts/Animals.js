import {LivingBeing} from "./LivingBeing.js"


class Animal extends LivingBeing{
    constructor(param){
        super(param); // Envoie les paramètre à la classe parent LivingBeing

        this.cage =  param["cage"] ? param["cage"] : null;
        this.type =  param["type"] ? param["type"] : null; // Terrestre, marin ou volatile           

    }
  
    Eat(obj){
  
    }
  
    Sleep(time){
  
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

    }
}

class Herbivorous extends Animal{
    constructor(param){
        super(param);
    }

    Ruminate(){

    }
}

class Monkey extends Herbivorous{

    constructor(param){
        super(param);
    }
}

export {Animal, Omnivorous, Herbivorous, Carnivorous, Monkey};