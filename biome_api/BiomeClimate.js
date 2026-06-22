// biome_api/BiomeClimate.js

export const BiomeClimate = Object.freeze({

    TEMPERATE: "temperate",

    HOT: "hot",

    COLD: "cold",

    DRY: "dry",

    WET: "wet",

    SAVANNA: "savanna",

    TROPICAL: "tropical",

    FROZEN: "frozen"

});

export function isValidClimate(climate) {

    return Object.values(BiomeClimate)
        .includes(climate);

}
