
// Class du stock de nourriture des humains
class HumanStock {
    constructor(param){
    this.foodStock = param["foodStock"] ? param["foodStock"] : 30; //Créer la variable du stock de nourriture avec valeur de base 30
    }
    
    // Fonction pour remettre le stock à jour
    FoodAlert(humanStock){
        if (humanStock.foodUse < 40) {
// console.log("Le Stock est presque vide.");
            humanStock.foodUse = 100; //Remet le stock de nourriture à 100
// console.log(humanStock.foodUse)
            return humanStock.foodUse //Retourne le stock de nourriture des humains
        }
    }
}

export {HumanStock};