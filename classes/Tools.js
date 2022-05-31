class Tools extends Item {
    constructor(name, effect, rarity, stealth, weight, price) {
        super(name, price, weight, effect);
        this.rarity = rarity;
        this.stealth = stealth;
    }
}