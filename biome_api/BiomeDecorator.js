// biome_api/BiomeDecorator.js

export class BiomeDecorator {

    constructor() {

        this.trees = [];
        this.flowers = [];
        this.ores = [];
        this.structures = [];
        this.lakes = [];
        this.features = [];

    }

    addTree(treeId) {
        this.trees.push(treeId);
        return this;
    }

    addFlower(blockId) {
        this.flowers.push(blockId);
        return this;
    }

    addOre(blockId) {
        this.ores.push(blockId);
        return this;
    }

    addStructure(structureId) {
        this.structures.push(structureId);
        return this;
    }

    addLake(blockId) {
        this.lakes.push(blockId);
        return this;
    }

    addFeature(featureId) {
        this.features.push(featureId);
        return this;
    }

    toJSON() {

        return {
            trees: this.trees,
            flowers: this.flowers,
            ores: this.ores,
            structures: this.structures,
            lakes: this.lakes,
            features: this.features
        };

    }
}
