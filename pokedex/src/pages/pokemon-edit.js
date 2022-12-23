import {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PokemonServices from "../services/pokemon-services";
import PokemonForm from "../components/pokemonForm";
// hooks
import useAuth from '../hooks/useAuth';

export default function PokemonEdit() {
    const { auth, addToPokedex, setPokedex, setUserInfo} = useAuth();

    console.log("POKEMON EDIT", auth);
    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null)
    useEffect(() => {
        (async () => {
            const Pokemon = await PokemonServices.getPokemon(id);
            setPokemon(Pokemon);
        })()
    }, [id])

    return (
        <>
        { 
            pokemon ? 
                (
                    <div className="row">
                        <div className="col">
                        </div>
                        <div className="col-8">
                            <PokemonForm  pokemon={pokemon}  isEdit={true}/>
                        </div>
                        <div className="col">
                        </div>
                    </div>
)
                 :
                 ( 
                    <div className="col">
                        <p>Pokémon inconnue dans votre Pokedex </p>
                    </div>
                 )
            
        }
        </>
    );
}