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
    /**
     * Get a pokemon by id
     * 
     * @param {*} id 
     * @returns {Object} pokemon
     */
    static getPokemon(id) {
        return new Promise((resolve, reject) => {
            const pokemon = POKEMONS.find(pokemon => pokemon.id === id);
            if(!pokemon) reject("No pokemon found");
            setTimeout(() => {
                resolve(pokemon);
            },2000);
        });
    }
}