import {Employee} from "./Employee.js";


class Healer extends Employee {
    constructor(param){
        super(param); 
        setInterval(this.feed, 3000);
    }

            feed(animal){
                console.log(this.hunger)
                if (animal.hunger > 4) {
                    animal.hunger = 0; //Remettre la faim des animaux à 0
                    this.exp++; //Chaque fois qu'un employé nourrit un animal, gagne 1 d'exp
                    this.available = 1; //Est occupé lorsqu'il soigne
                    console.log("L'employé nourri Maurice.")
                }
                else {
                    this.available = 0;
                }
            }
            heal(){
                animal.pv = 10//Valeur PV de l'animal de base    //Soigne les pv d'un animal blessé
                this.exp = exp + 5; 
            }
}


export {Healer};
