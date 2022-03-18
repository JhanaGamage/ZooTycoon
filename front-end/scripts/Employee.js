import {LivingBeing} from "./LivingBeing.js";

// Class des employés
class Employee extends LivingBeing{
    constructor (param){
        super(param); //Fait remonter tous les attributs au parent
        this.exp = param["exp"] ? param["exp"] : 0; //Expérience de l'employé
        this.level = param["level"] ? param["level"] : 1; //Niveau de l'employé
    }

    // Fonction pour que les employés se nourrissent
    FeedItself(employee,humanStock){
        if (employee.hunger > 4) {
            employee.hunger = 0; //Remet la faim de l'employé à 0
//Intéraction avec le stock | A FINIR | humanStock.foodStock = humanStock.foodStock - 9;
////////////////////////////| A FINIR | console.log("foodUse: " + humanStock.foodStock);
////////////////////////////| A FINIR | return humanStock.foodStock;
        }
        if (employee.thirst > 2) {
            employee.thirst = 0 //Remet la soif de l'employé à 0
        }
    }

    // Fonction qui détermine les possibilités d'avoir un infarctus
    HeartAttack(min,max,employee) { //Fonction possibilité d'infarctus aléatoire
        min = Math.ceil(min); //Donne le minimum d'intervale
        max = Math.floor(max); //Donne le maximum d'intervale
        var chanceDie = Math.floor(Math.random() * (max - min + 1) + min); //Donne un nombre pour définir les chances d'activé chanceDie
        
        if (chanceDie === 1) {
            employee.health = employee.health - 5; //l'employé perd 5PV à chaque infarctus
            return employee.health; //Renvoie les PV de l'employé
        }            
    }
}

export {Employee};

