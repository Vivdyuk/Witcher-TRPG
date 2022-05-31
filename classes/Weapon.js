class Weapon extends Item {
    constructor(name, type, rarity, accuracy, damage, durability, hands, distance, effects, stealth, buff, weight, price) {
        super(name, weight, price);
        this.type = type;
        this.rarity = rarity;
        this.accuracy = accuracy;
        this.damage = damage;
        this.durability = durability;
        this.hands = hands;
        this.distance = distance;
        this.effects = effects;
        this.stealth = stealth;
        this.buff = buff;
    }
}