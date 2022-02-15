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
      this.inventory = param["inventory"] ? param["inventory"] : {}; // Ici l'inventaire est un objet vide. L'argent et autres objets seront stockés dedans
      this.name = param["name"] ? param["name"] : "Maurice"; // Faim

      console.log("Youpi, un être vivant de " + this.age + " ans apparait");     

      this.life = setInterval(() => {
        if(this.pv <= 0)
            this.Die();

        if(this.hunger > 5){
          this.mood--;
          this.pv--;
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

    }

    Defends(attacker){
    
    }

    Die(){
      console.log(this.name + "vient de mourir");
      clearInterval(this.life);
    }
}
export {LivingBeing};