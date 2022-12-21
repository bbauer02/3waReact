import PropTypes from "prop-types";
import { useState } from "react";
import { formatType,formatDate } from "../helpers";
import { useNavigate } from "react-router-dom";

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        hp: PropTypes.number.isRequired,
        cp: PropTypes.number.isRequired,
        picture: PropTypes.string.isRequired,
        types: PropTypes.arrayOf(PropTypes.string).isRequired,
        created: PropTypes.instanceOf(Date).isRequired,
    }).isRequired,
}

export default function PokemonCard({pokemon}) {
    const [color, setColor] = useState('#f5f5f5');
    const navigate = useNavigate();

    const showBorder = (pokemonId) => {
        setColor('#fe1b00');
    };
     
    const hideBorder = (pokemonId) => {
        setColor('#f5f5f5');
    };

    const goToPokemon = (id) => {
       navigate(`/pokemon/${id}`);
      }
      
    return (
        <div 
        className="col s12 m6 l4" 
        key={pokemon.id} 
        onMouseEnter={() => showBorder()} 
        onMouseLeave={() => hideBorder()}
        onClick={() => goToPokemon(pokemon.id)}
        >
            <div 
                className="card horizontal" 
                style={{ borderColor: color }} 
            >
                <div className="card-image">
                    <img src={pokemon.picture} alt={pokemon.name} />
                </div>  
                <div className="card-content">
                    <p>#{pokemon.id} {pokemon.name}</p>
                    <p><small>{formatDate(pokemon.created)}</small></p>
                    {pokemon.types.map(type => (
                        <span key={type} className={formatType(type)}>{type}</span>
                    ))}
                </div>
               

            </div>
        </div>

    );
}