class Ammo extends Item {
    constructor(name, type, rarity, durability, effect, stealth, weight, price) {
        super(name, weight, price, effect)
        this.type = type;
        this.rarity = rarity;
        this.durability = durability;
        this.stealth = stealth;
    }
}