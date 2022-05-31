class Vehicle extends Item {
    constructor(name,athletePlusAgility, sensitivityModifier, speed, hp,weight,price ) {
        super(name, price, weight);
        this.athletePlusAgility = athletePlusAgility;
        this.sensitivityModifier = sensitivityModifier;
        this.speed = speed;
        this.hp = hp;
    }
}