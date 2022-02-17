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
            ProtectCLient(){
                if (chanceFalling == 4) {
                    console.log("Il y'a lien");    
                }
                
            //     if(client.dead) {
            //         this.exp = exp + 15 //Gagne Exp
            //         animals.pv = animals.pv - 5 //Blesse Animal
            //     }
            //     else if(/*Si Security non intervenu*/){
            //         this.exp = exp-- //Perd Exp
            //         client.pv = 0 //Il est mort  
            //     }
            //     else {
            //         client.pv = 0 //Mort
            //         Security.pv = 0 //Mort
            //     }          
            }
}

export {SecurityGuard};