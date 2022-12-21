import POKEMONS from "../datas/mock-pokemon";

export default class PokemonServices {
    /**
     * Get all pokemons
     * @returns {Array} all pokemons
     */
    static getAll() {
        return new Promise((resolve, reject) => {
            if(!POKEMONS) reject("No pokemons found")
            setTimeout(() => {
                resolve(POKEMONS);
            },2000);
        });
    }
}