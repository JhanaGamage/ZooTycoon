class LivingBeing {
    constructor(param) {
      // Pour recevoir les paramètres depuis la descendance on fait remonter un objet  
      // À chaque ligne on déclare une variable dans la classe, 
      // pour lui attribuer sa valeur on vérifie si l'objet "param" passé en argument depuis l'instanciation
      // d'une classe enfant possède un variable ayant pour clef celle que l'on recherche
      // en utilisant nomDeLObjet["nomDeLaClef"]

      // Toutes les échelles de valeurs seront comprises entre 1 et 10
      // Sauf pour les états ternaires réprésentés par 1 2 3 
    
      this.name = param["name"] ? param["name"] : "Maurice"; // Nom
      this.age = param["age"] ? param["age"] : 30; 
      this.health = param["health"] ? param["health"] : 10; // Points de vie
      this.mood = param["mood"] ? param["mood"] : 3; // Humeur
      this.thirst = param["thirst"] ? param["thirst"] : 0; // Soif
      this.hunger = param["hunger"] ? param["hunger"] : 0; // Faim
      this.inventory = param["inventory"] ? param["inventory"] : {}; // Ici l'inventaire est un objet vide. L'argent et autres objets seront stockés dedans. Chaque variable est le nom de l'objet stocké dans l'inventaire avec sa quantité en attribut
      this.strength = param["strength"] ? param["strength"] : 5;
      this.available = param["available"] ? param["available"] : true;

      this.manager = param["manager"] ? param["manager"] : null;
      this.className = param["className"] ? param["className"] : null;
      this.clock = param["clock"] ? param["clock"] : null;


      // console.dir(this); // Console.log toutes les variables du constructor

      this.life = setInterval(() => { // Fonction d'intervale pour la vie des êtres vivants
        
        if(this.health <= 0){
          console.log("die")
          if(this.manager) this.manager.DeleteObjectFromLocalDatabase(this.name, this.className);
          clearInterval(this.life); // Mettre fin à l'intervale définit précédemment
          //  this.Die(); 
        }


        if(this.hunger > 5 || this.thirst > 5){
          this.mood--; //Baisse l'humeur
          this.health--; //Perd des health
        }

        this.hunger++; //Gagne de la faim
        this.thirst++; //Gagne de la soif

      }, 1000);

      
    }

    LivingFunctions(functions){
      functions.forEach(func => {
         func();
      });
    }

    Eat(obj){
  
    }
  
    Sleep(time){
  
    }

    Attacks(target){
        //console.log(this.name + " mets une bonne grosse patate de forain à " + target.name + "qui perd " + this.strength + " points de vie, OUUUUCH");
    }

    Defends(attacker){
        //console.log(this.name + " tente de se défendre contre " + attacker)
    }

    CounterAttack(target){
      //console.log(this.name + "n'apprécie pas et renvoie une mawashigeri dans sa face, BAAAAM !");
      target.health--;
    }

    Steal(){
      // Un singe ou un adulte peut voler quelqu'un. Peut provoquer une bagarre
    }

    Die(){
      //console.log(this.name + " vient de mourir");
      if(this.manager) this.manager.DeleteObjectFromLocalDatabase(this.name, this.className);
      clearInterval(this.life); // Mettre fin à l'intervale définit précédemment
    }
}


export {LivingBeing};