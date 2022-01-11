
class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name,cost,power,res);
        this.power = power;
        this.res = res;
    }

    attack(target) {
        target.res -= this.power;
        console.log(`${this.name} attacked ${target.name} for ${this.power}`)
    }

}

class Effect extends Card {
    constructor(name,cost, text, stat, magnitude){
        super(name,cost, text, stat, magnitude);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play(target) {
        if (target instanceof Unit) {
            if (this.stat === "resilience") {
                target.res += this.magnitude;
            }
            if(this.stat === "power"){
                target.power += this.magnitude;
            }
        } else {
            throw new Error("Target must be an effect!");
        }
    }
}

// Unit Cards
const redbelt = new Unit("redbelt ninja",3,3,4);
const blackbelt = new Unit("blackbelt ninja",4,5,4);
// Effect Cards
const hardAlgo= new Effect("Hard Algorithim",2,"increase target's resilience by 3","resilience",+3);
const promrejection= new Effect("Unhandled Promise Rejection",1,"reduce target's resilience by 2","resilience",-2);
const pairprogram= new Effect("Pair Programming",3,"increase target's power by 2","power",+2);

console.log(redbelt);
hardAlgo.play(redbelt);
console.log(redbelt);
console.log("==========================================================")
console.log(redbelt);
promrejection.play(redbelt);
console.log(redbelt);
console.log("==========================================================")
console.log(redbelt);
pairprogram.play(redbelt);
console.log(redbelt);



