class ZooManager {

    constructor(humans = [], animals = [], stands = []){


        this.time = 0; // Temps en secondes 

        this.humans = humans;
        this.animals = animals;
        this.stands = stands;

        setInterval(this.Clock, 1000);
    }

    AddHuman(human){
        this.humans.push(human);        
    }

    AddAnimal(animal){
        this.animals.push(animal)
    }

    AddStand(stand){
        this.stands.push(stand)
    }
   
    Clock(){
       this.time++;
    }
}

export  {ZooManager};