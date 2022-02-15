class LivingBeing {
    constructor(param, age = 30, pv = 10, mood = 3, thirst = 0, hunger = 0) {
      // Pour recevoir les paramètres depuis la descendance on fait remonter un objet  
      // À chaque ligne on déclare une variable dans la classe, 
      // pour lui attribuer sa valeur on vérifie si l'objet "param" passé en argument depuis l'instanciation
      // d'une classe enfant possède un variable ayant pour clef celle que l'on recherche
      // en utilisant nomDeLObjet["nomDeLaClef"]

      this.age = param["age"] ? param["age"] : age; 
      this.pv = param["pv"] ? param["pv"] : pv; // Points de vie
      this.mood = param["mood"] ? param["mood"] : mood; // Humeur
      this.thirst = param["thirst"] ? param["thirst"] : thirst; // Soif
      this.hunger = param["hunger"] ? param["hunger"] : hunger; // Faim

      console.log("Un être vivant de " + this.age + " ans apparait");
    }
}
export {LivingBeing};