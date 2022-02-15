import {LivingBeing} from "./LivingBeing.js";

class Employee extends LivingBeing{
    constructor (param){
    super(param); // Envoie à la classe parents LivingBeing
    this.available = param["available"] ? param ["available"] : 0 //0 = dispo / 1 = non dispo
    this.exp = param["exp"] ? param["exp"] : 0; //Expérience de l'employé

    if (this.available = 0) {
        console.log("Cette employé est dispo.")  
    }
    else{
        console.log("Cette employé n'est pas dispo.")
    }

    console.log("Son expérience est de " + this.exp)
    }
}

// PAS ENCORE FAIT
            // Infarction() { //Fonction possibilité d'infarctus aléatoire
            //     let x = Math.random(); 
            //     if (x = 10) {
            //         this.pv = pv - 5;
            //         alert ("Cette employé a perdu 5 pv.");
            //     }
            //     console.log ("X est égale à " + x + " et ses PV sont à " + this.pv);
            // }


export {Employee};

