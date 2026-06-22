// biome_api/BiomeMobSpawner.js

export class BiomeMobSpawner {

    constructor() {

        this.mobs = [];

    }

    addMob(
        identifier,
        weight = 10,
        minGroup = 1,
        maxGroup = 4
    ) {

        this.mobs.push({
            identifier,
            weight,
            minGroup,
            maxGroup
        });

        return this;
    }

    removeMob(identifier) {

        this.mobs = this.mobs.filter(
            mob => mob.identifier !== identifier
        );

        return this;
    }

    getMobs() {
        return this.mobs;
    }

    toJSON() {
        return this.mobs;
    }
}
