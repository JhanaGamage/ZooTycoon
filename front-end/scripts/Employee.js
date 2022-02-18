import {LivingBeing} from "./LivingBeing.js";

// Class des employés
class Employee extends LivingBeing{
    constructor (param){
    super(param); //Fait remonter tous les attributs au parent
    this.available = param["available"] ? param ["available"] : 0 //0 = dispo / 1 = non dispo
    this.exp = param["exp"] ? param["exp"] : 0; //Expérience de l'employé
    this.level = param["level"] ? param["level"] : 1;
    }


    FeedThemselves(){
        if (this.hunger > 4) {
            this.hunger = 0;
        }
    }

    // Fonction qui détermine les possibilités d'avoir un infarctus
    HeartAttack(min,max,employee) { //Fonction possibilité d'infarctus aléatoire
        min = Math.ceil(min); //Donne le minimum d'intervale
        max = Math.floor(max); //Donne le maximum d'intervale
        var chanceDie = Math.floor(Math.random() * (max - min + 1) + min);
    
        if (chanceDie == 1) {
            employee.pv = employee.pv - 5;
            return employee.pv;
        }            
    }
}

export {Employee};

