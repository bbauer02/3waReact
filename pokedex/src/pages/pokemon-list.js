import { useState, useEffect } from "react";
import PokemonCard from "../components/pokemonCard";
import PokemonServices  from "../services/pokemon-services";
import "../components/pokemonCard.css";
import Loader from "../components/loader";

export default function PokemonList() {
    const [pokemons, setPokemons] = useState(null);
    useEffect(() => {
/*
        async function getPokemons() {
            const pokemons = await PokemonServices.getAll();
            setPokemons(pokemons);
        }
        getPokemons();

        OU .....

*/
        (async () => {
            const pokemons = await PokemonServices.getAll();
            setPokemons(pokemons);
        })();
    }, []);

    return (
        <div>
            <h1 className="text-center title" >Pokédex</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                    {pokemons? 
                        (pokemons.map(pokemon => (
                            <PokemonCard key={pokemon.id} pokemon={pokemon} />
                        )))
                    : <h4 className="text-center"><Loader /></h4>  } 
            </div>
        </div> 
    );
}