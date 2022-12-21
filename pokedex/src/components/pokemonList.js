import { useState, useEffect } from "react";
import POKEMONS from "../datas/mock-pokemon";
import PokemonCard from "./pokemonCard";
import "./pokemonCard.css";


export default function PokemonList() {
    const [pokemons, setPokemons] = useState(POKEMONS);

    useEffect(() => {
        setPokemons(POKEMONS);
    }, []);

    return (
        <div>
            <h1 className="center" >Pokédex</h1>
            <div className="container"> 
                <div className="row" > 
                    {pokemons.map(pokemon => (
                        <PokemonCard key={pokemon.id} pokemon={pokemon} />
                    ))} 
                </div>
            </div>
        </div> 
    );
}