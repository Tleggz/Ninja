class Ninja {
    constructor(name, health = 100, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName() {
        console.log(`My name is ${this.name}`);
    }
    showStats() {
        console.log(`Name: ${this.name} Health: ${this.health} Speed: ${this.speed} Strength: ${this.strength}`); 
    }
    drinkSake() {
        this.health += 10;
        console.log(`${this.name} is drinking sake and has ${this.health} health`);
    }
}

class Sensei extends Ninja {
    constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10) {
        super(name, health, speed, strength);
        this.wisdom = wisdom;
    }

    speakWisdom() {
        this.drinkSake();
        console.log("Speaking wisdom");
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}

console.log("\n creating Tom");
const ninja1 = new Ninja("Tom", 10);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
// console.log(ninja1);

console.log("\n creating Will");
const ninja2 = new Ninja("Will", 15, 5, 7);
ninja2.sayName();
ninja2.showStats();
ninja2.drinkSake();
// console.log(ninja2);

console.log("\n creating Sensei Tom");
const sensei1 = new Sensei("Sensei Tom");
sensei1.showStats();
sensei1.speakWisdom();
// console.log(sensei1);