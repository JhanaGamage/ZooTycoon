// import { Animal } from "./Animals";

class LivingBeing {
    constructor(param) {
      // Pour recevoir les paramètres depuis la descendance on fait remonter un objet  
      // À chaque ligne on déclare une variable dans la classe, 
      // pour lui attribuer sa valeur on vérifie si l'objet "param" passé en argument depuis l'instanciation
      // d'une classe enfant possède un variable ayant pour clef celle que l'on recherche
      // en utilisant nomDeLObjet["nomDeLaClef"]

      this.age = param["age"] ? param["age"] : 30; 
      this.pv = param["pv"] ? param["pv"] : 10; // Points de vie
      this.mood = param["mood"] ? param["mood"] : 3; // Humeur
      this.thirst = param["thirst"] ? param["thirst"] : 0; // Soif
      this.hunger = param["hunger"] ? param["hunger"] : 0; // Faim
      this.inventory = param["inventory"] ? param["inventory"] : {}; // Ici l'inventaire est un objet vide. L'argent et autres objets seront stockés dedans. Chaque variable est le nom de l'objet stocké dans l'inventaire avec sa quantité en attribut
      this.name = param["name"] ? param["name"] : "Maurice"; // Nom
      this.strength = param["strength"] ? param["strength"] : 5;
      this.manager = param["manager"] ? param["manager"] : null;

      console.dir(this); // Console.log toutes les variables du constructor

      this.life = setInterval(() => {
        if(this.pv <= 0)
            this.Die();

        if(this.hunger > 5){
          this.mood--;
          this.pv--;
          // console.log(this.pv + this.name);
        }

        this.hunger++;

      }, 1000);
    }

    LivingFunctions(functions){
      functions.forEach(func => {
         func();
      });
    }

    Attacks(target){
        console.log(this.name + " mets une bonne grosse patate de forain à " + target.name + "qui perd " + this.strength + " points de vie, OUUUUCH");
    }

    Defends(attacker){
        console.log(this.name + " tente de se défendre !")
    }

    CounterAttack(target){
      console.log(this.name + "n'apprécie pas et renvoie une mawashigeri dans sa face, BAAAAM !");
      target.pv--;
    }

    Die(){
      console.log(this.name + " vient de mourir");
      clearInterval(this.life);
    }
}


export {LivingBeing};