class Armor extends Item{
    constructor(name, durability, rarity, buff, effects, movesModifier, weight, price) {
        super(name, price, weight);
        this.durability= durability;
        this.rarity = rarity;
        this.buff = buff;
        this.effects = effects;
        this.movesModifier = movesModifier;
    }
}




