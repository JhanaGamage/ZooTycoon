import {Employee} from "./Employee.js";

// Class des gardes de sécurité
class SecurityGuard extends Employee {
    constructor(param){
        super(param); //Fait remonter tous les attributs au parent
    }

    // Fonction pour nettoyer la cage
    CleanCage(){
        this.exp++; //Chaque cage nettoyé, guard gagne 1 d'exp
    }

    
// PAS ENCORE FAIT
    ProtectClient(min,max,animal){
        min = Math.ceil(min);
        max = Math.floor(max);
        var chanceSave = Math.floor(Math.random() * (max - min + 1) + min);
        console.log("chanceSave: " + chanceSave);
        if (chanceSave == 1) {
            this.exp = this.exp + 15; //Gagne Exp
            animal.pv = animal.pv - 5; //Blesse Animal
            console.log("Le garde de sécurité a réussi à sauver le clients d'une mort certaine.")
        }

        if (chanceSave == 2 || chanceSave == 3) {
            // client.pv = 0;
            this.exp = this.exp + 3;
            console.log("Malheureusement le client n'a pas survécu malgré l'intervention du garde de sécurité.");
        }

        if (chanceSave == 4) {
            console.log("Le client et le garde de sécurité n'ont pas surécu, l'animal était incontrôlable.");
        }

        if (chanceSave == 5) {
            this.exp = this.exp - 10;
            console.log("Le garde de sécurité n'a pas voulu intervenir.")
        }          
    }
}

export {SecurityGuard};