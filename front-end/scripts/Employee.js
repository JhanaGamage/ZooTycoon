import {LivingBeing} from "./LivingBeing.js";

// Class des employés
class Employee extends LivingBeing{
    constructor (param){
    super(param); //Fait remonter tous les attributs au parent
    this.available = param["available"] ? param ["available"] : 0 //0 = dispo / 1 = non dispo
    this.exp = param["exp"] ? param["exp"] : 0; //Expérience de l'employé
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

