// biome_api/BiomeMaterials.js

export class BiomeMaterials {

    constructor(
        topMaterial = "minecraft:grass_block",
        middleMaterial = "minecraft:dirt",
        bottomMaterial = "minecraft:stone"
    ) {

        this.topMaterial = topMaterial;
        this.middleMaterial = middleMaterial;
        this.bottomMaterial = bottomMaterial;

    }

    setTop(material) {
        this.topMaterial = material;
        return this;
    }

    setMiddle(material) {
        this.middleMaterial = material;
        return this;
    }

    setBottom(material) {
        this.bottomMaterial = material;
        return this;
    }

    toJSON() {

        return {
            top_material: this.topMaterial,
            middle_material: this.middleMaterial,
            bottom_material: this.bottomMaterial
        };

    }
}
