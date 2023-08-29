class Ninja {
    constructor(name,health,speed = 0,strength = 0){
        this.name = name
        this.health = health
        this.speed = speed
        this.strength = strength
    }
    sayName(){
        console.log(`name : ${this.name}`);
        return this
    }
    showStats(){
        console.log(`name : ${this.name}`);
        console.log(`health : ${this.health}`);
        console.log(`speed : ${this.speed}`);
        console.log(`strength : ${this.strength}`);
        return this
    }
    drinkSake(){
        this.health+= 10;
        return this
    }
}