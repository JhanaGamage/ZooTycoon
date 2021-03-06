import {Employee} from "./Employee.js";

// Class des soigneurs
class Healer extends Employee {
    constructor(param){
        super(param); //Fait remonter tous les attributs au parent

        console.log(this.constructor.name)
    }

    // Fonction pour nourrir les animaux
    feed(animal){
        if (animal.hunger > 4) {
            animal.hunger = 0; //Remet la faim des animaux à 0
            animal.thirst = 0 //Remet la soif des animaux à 0
            this.exp++; //Chaque animal nourrit, monHealer gagne 1 d'exp
            this.available = 1; //Est occupé lorsqu'il soigne            
        }
        else {
            this.available = 0; //N'est pas occupé
        }
    }

    // Fonction pour soigner les animaux
    heal(animal){
        if (animal.health < 5) {
            animal.health = animal.health + 10; //Soigne les PV d'un animal blessé
            this.exp =+ 5; //Chaque animal soigné, monHealer gagne 5 d'exp
        }        
    }
}


export {Healer};
