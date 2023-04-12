class NonPlayableCharacterModel {
    constructor(name, initiative, armor, health) {
        this.name = name;
        this.initiative = initiative;
        this.armor = armor;
        this.health = health;
        this.initialHealth = health;
        this.effects = []; // Populate with DnDEffects.
        this.concentration = false;
        this.hasCurrentTurn = false;
    }
}

export default NonPlayableCharacterModel;