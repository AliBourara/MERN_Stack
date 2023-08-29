class Card {
    constructor(name, cost) {
        this.name = name
        this.cost = cost
    }

}

class Unit extends Card {
    constructor(name, cost, power, resilience) {
        super(name, cost)
        this.power = power
        this.resilience = resilience
    }
    attack(target) {
        target.resilience -= this.power
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost)
        this.text = text
        this.stat = stat
        this.magnitude = magnitude
    }
    apply_effect(target) {
        if (target instanceof Unit) {
            //target unit .power .resilience
            //stat effect "power" "resilience"

            //target[this.stat]
            target[this.stat] += this.magnitude

            //- {} can be removed when we only have one line of code iteration
            // if (this.stat === "resilience")
            //     target.resilience += this.magnitude
            // else
            //     target.power += this.magnitude;
        } else {
            throw new Error("Target must be a unit!");
        }
    }
}




const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4)
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4)

const hardAlgorithm = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", +3);
const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection",1,"Reduce target's resilience by 2","resilience",-2);
const pairProgramming = new Effect("Pair Programming",3,"increase target's power by 2","power",+2);
hardAlgorithm.apply_effect(redBeltNinja);
unhandledPromiseRejection.apply_effect(redBeltNinja);
pairProgramming.apply_effect(redBeltNinja);
redBeltNinja.attack(blackBeltNinja);




