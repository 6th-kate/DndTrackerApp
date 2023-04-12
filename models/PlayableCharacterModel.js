class PlayableCharacterModel {
    constructor(name, languages, insight, perception, investigation, initiative) {
        this.name = name;
        this.languages = languages;
        this.insight = insight;
        this.perception = perception;
        this.investigation = investigation;
        this.initiative = initiative;
        this.effects = []; // Populate with DnDEffects.
        this.concentration = false;
        this.hasCurrentTurn = false;
    }
}

export default PlayableCharacterModel;