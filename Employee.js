import LivingBeing from "./LivingBeing";

class Employee extends LivingBeing{
    constructor (available = true, exp = 0){
    this.available = available;
    this.exp = exp
    }
    Infarction() {
        let x = Math.random(); 
        if (x = 10) {
            pv = pv - 10
            alert ("Cette employé a perdu 10 pv.")
        }
    }
}

export default Employee;

