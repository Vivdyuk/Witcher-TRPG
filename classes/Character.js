class Character {
  constructor(energy, inventory, learnedSkills, notes = '') {
    this.energy = energy;
    this.inventory = inventory;
    this.learnedSkills = learnedSkills;
    this.notes = notes;
  }
}