import axios from "axios";
export default class PokemonServices {


    static async add(pokemon) {
        const res = await axios.post(`/pokemons`,pokemon);
        return res.data
    }

    static async edit(id, pokemon) {
        const res = await axios.put(`/pokemons/${id}`,pokemon);
        return res.data
    }

    static async delete(id) {
        const res =  await axios.delete(`/pokemons/${id}`);
        return res;
    }

    /**
     * Get all pokemons
     * @returns {Array} all pokemons
     */
    static async getAll() {
        const res = await axios.get('/pokemons');
        return res.data;
    }
    /**
     * Get a pokemon by id
     * 
     * @param {*} id 
     * @returns {Object} pokemon
     */
    static async getPokemon(id) {
        try {
            const res = await axios.get(`/pokemons/${id}`);
            return res.data;
        }
        catch {
            return null
        }
    }
}