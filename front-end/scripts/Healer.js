import {Employee} from "./Employee.js";


class Healer extends Employee {
    constructor(param){
        super(param); 
      //  setInterval(this.feed, 3000);
    }

    feed(animal){
       console.log("Son niveau de faim est de :" + animal.hunger);
       //console.log("Son niveau d'expérience est de :" + this.exp)
        if (animal.hunger > 4) {
            animal.hunger = 0; //Remettre la faim des animaux à 0
            console.log("Son niveau de faim est de :" + animal.hunger);

            this.exp++; //Chaque fois qu'un employé nourrit un animal, gagne 1 d'exp
            this.available = 1; //Est occupé lorsqu'il soigne
            console.log("L'employé a nourrit " + animal.name + " son niveau de faim est maintenant de :" + animal.hunger);
            return animal.hunger
        }
        else {
            this.available = 0;
        }
    }


    heal(animal){
        animal.pv = 10//Valeur PV de l'animal de base    //Soigne les pv d'un animal blessé
        this.exp =+ 5; 
    }
}


export {Healer};
