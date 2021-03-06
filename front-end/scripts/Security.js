import {Employee} from "./Employee.js";

// Class des gardes de sécurité
class SecurityGuard extends Employee {
    constructor(param){
        super(param); //Fait remonter tous les attributs au parent
    }

    // Fonction pour nettoyer la cage
    CleanCage(){
        if (this.level < 5){
            this.exp = this.exp + 1; //Guard gagne 1 d'exp
            return this.exp;
        }
    }

    // Fonction pour sauver un client // Garde de LVL 1
    ProtectClientLvl1(min,max,animal,clientOnStand,guard){
        min = Math.ceil(min); //Donne le minimum d'intervale
        max = Math.floor(max); //Donne le maximum d'intervale
        var chanceSave = Math.floor(Math.random() * (max - min + 1) + min); //Calcule un nombre aléatoire compris entre le minimum et le maximum donné juste avant
// console.log("chanceSave: " + chanceSave);
    
        if (chanceSave == 1 || chanceSave == 2) { //Probabilité d'avoir ce scénario
            this.exp = this.exp + 15; //Gagne Expérience
            animal.health =animal.health - 3; //Blesse Animal
            // console.log("Le garde de sécurité a réussi à sauver le clients d'une mort certaine.")
            // console.log(animal.name + " n'a plus que " + animal.health + " point de vie")
            return this.exp + animal.health; //Retourne l'expérience du Garde et les health de l'animal
        }

        if (chanceSave == 3 || chanceSave == 4 || chanceSave == 5 || chanceSave == 6) { //Probabilité d'avoir ce scénario
            clientOnStand.health = 0; //client mort
            this.exp = this.exp + 3; //Gagne Expérience
            // console.log("Malheureusement le client n'a pas survécu malgré l'intervention du garde de sécurité.");
            return this.exp, clientOnStand.health; //Retourne l'expérience du Garde et les health du client sur le stand
        }

        if (chanceSave == 7) { //Probabilité d'avoir ce scénario
            clientOnStand.health = 0; //client mort
            guard.health = 0; //Garde de sécurité mort
            // console.log("Le client et le garde de sécurité n'ont pas survécu, l'animal était incontrôlable.");
            return clientOnStand.health, guard.health; //Retourne les health du client sur le stand et les health du Garde
        }

        if (this.exp >= 10 && chanceSave == 8 || chanceSave == 9 || chanceSave == 10) { //Probabilité d'avoir ce scénario
            clientOnStand.health = 0; //client mort
            this.exp = this.exp - 10; //Perd Expérience
            // console.log("Le garde de sécurité n'a pas voulu intervenir. Le client est donc décédé.")
            return this.exp, clientOnStand.health; //Retourne l'expérience du Garde et les health du client sur le stand
        }          
    }

    // Fonction pour sauver un client // Garde de LVL 2
    ProtectClientLvl2(min,max,animal,clientOnStand){
        min = Math.ceil(min); //Donne le minimum d'intervale
        max = Math.floor(max); //Donne le maximum d'intervale
        var chanceSave = Math.floor(Math.random() * (max - min + 1) + min); //Calcule un nombre aléatoire compris entre le minimum et le maximum donné juste avant
// console.log("chanceSave: " + chanceSave);

        if (chanceSave == 1 || chanceSave == 2 || chanceSave == 3 || chanceSave == 4) { //Probabilité d'avoir ce scénario
            this.exp = this.exp + 15; //Gagne Expérience
            animal.health =animal.health - 3; //Blesse Animal
            // console.log("Le garde de sécurité a réussi à sauver le clients d'une mort certaine.")
            // console.log(animal.name + " n'a plus que " + animal.health + " point de vie")
            return this.exp + animal.health; //Retourne l'expérience du Garde et les health de l'animal
        }

        if (chanceSave == 5 || chanceSave == 6 || chanceSave == 7 || chanceSave == 8) { //Probabilité d'avoir ce scénario
            clientOnStand.health = 0; //Client mort
            this.exp = this.exp + 3; //Gagne Expérience
            // console.log("Malheureusement le client n'a pas survécu malgré l'intervention du garde de sécurité.");
            return this.exp, clientOnStand.health; //Retourne l'expérience du Garde et les health du client sur le stand
        }

        if (chanceSave == 9 || chanceSave == 10) { //Probabilité d'avoir ce scénario
            clientOnStand.health = 0; //Client mort
            this.exp = this.exp - 10; //Perd Expérience
            // console.log("Le garde de sécurité n'a pas voulu intervenir. Le client est donc décédé.")
            return this.exp, clientOnStand.health; //Retourne l'expérience du Garde et les health du client sur le stand
        }
    }

    // Fonction pour sauver un client // Garde de LVL 3
    ProtectClientLvl3(min,max,animal,clientOnStand){
        min = Math.ceil(min); //Donne le minimum d'intervale
        max = Math.floor(max); //Donne le maximum d'intervale
        var chanceSave = Math.floor(Math.random() * (max - min + 1) + min); //Calcule un nombre aléatoire compris entre le minimum et le maximum donné juste avant
// console.log("chanceSave: " + chanceSave);

        if (chanceSave == 1 || chanceSave == 2 || chanceSave == 3 || chanceSave == 4 || chanceSave == 5 || chanceSave == 6) { //Probabilité d'avoir ce scénario
            this.exp = this.exp + 15; //Gagne Expérience
            animal.health =animal.health - 3; //Blesse Animal
            // console.log("Le garde de sécurité a réussi à sauver le clients d'une mort certaine.")
            // console.log(animal.name + " n'a plus que " + animal.health + " point de vie")
            return this.exp + animal.health; //Retourne l'expérience du Garde et les health de l'animal
        }

        if (chanceSave == 7 || chanceSave == 8 || chanceSave == 9) { //Probabilité d'avoir ce scénario
            clientOnStand.health = 0; //Client mort
            this.exp = this.exp + 3; //Gagne Expérience
            // console.log("Malheureusement le client n'a pas survécu malgré l'intervention du garde de sécurité.");
            return this.exp, clientOnStand.health; //Retourne l'expérience du Garde et les health du client sur le stand
        }

        if (chanceSave == 10) { //Probabilité d'avoir ce scénario
            clientOnStand.health = 0; //Client mort
            this.exp = this.exp - 10; //Perd Expérience
            // console.log("Le garde de sécurité n'a pas voulu intervenir. Le client est donc décédé.")
            return this.exp ,clientOnStand.health; //Retourne l'expérience du Garde et les health du client sur le stand
        }
    }

    // Fonction pour sauver un client // Garde de LVL 4
    ProtectClientLvl4(min,max,animal,clientOnStand){
        min = Math.ceil(min); //Donne le minimum d'intervale
        max = Math.floor(max); //Donne le maximum d'intervale
        //Calcule un nombre aléatoire compris entre le minimum et le maximum donné juste avant
        var chanceSave = Math.floor(Math.random() * (max - min + 1) + min); 
// console.log("chanceSave: " + chanceSave);

        if (chanceSave == 1 || chanceSave == 2 || chanceSave == 3 || chanceSave == 4 || chanceSave == 5 || chanceSave == 6 || chanceSave == 7 || chanceSave == 8) { //Probabilité d'avoir ce scénario
            this.exp = this.exp + 15; //Gagne Expérience
            animal.health =animal.health - 3; //Blesse Animal
            // console.log("Le garde de sécurité a réussi à sauver le clients d'une mort certaine.")
            // console.log(animal.name + " n'a plus que " + animal.health + " point de vie")
            return this.exp, animal.health; //Retourne l'expérience du Garde et les health de l'animal
        }

        if (chanceSave == 9 || chanceSave == 10) { //Probabilité d'avoir ce scénario
            clientOnStand.health = 0; //Client mort
            this.exp = this.exp + 3; //Gagne Expérience
            // console.log("Malheureusement le client n'a pas survécu malgré l'intervention du garde de sécurité.");
            return this.exp, clientOnStand.health; //Retourne l'expérience du Garde et les health du client sur le stand
        }
    }

    // Fonction pour sauver un client // Garde de LVL 5
    ProtectClientLvl5(animal){
        animal.health = animal.health - 3; //Blesse Animal
        // console.log("Le garde de sécurité a réussi à sauver le clients d'une mort certaine.");
        // console.log(animal.name + " n'a plus que " + animal.health + " point de vie");
        return animal.health; //Retourne les health de l'animal
    }
}

export {SecurityGuard};