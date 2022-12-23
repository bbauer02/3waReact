import PropTypes from "prop-types";
import { useState } from "react";
import { formatType,formatDate } from "../helpers";
import { useNavigate } from "react-router-dom";
import './pokemonCard.css';


PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        hp: PropTypes.number.isRequired,
        cp: PropTypes.number.isRequired,
        picture: PropTypes.string.isRequired,
        types: PropTypes.arrayOf(PropTypes.string).isRequired,
        created: PropTypes.string,
    }).isRequired,
}

export default function PokemonCard({pokemon}) {
    const [color, setColor] = useState('#f5f5f5');
    const navigate = useNavigate();

    const showBorder = () => {
        setColor('#FFCB05');
    };
     
    const hideBorder = () => {
        setColor('#f5f5f5');
    };

    const goToPokemon = (id) => {
       navigate(`/pokemon/${id}`);
      }
      
    return (
        <div className="col">
            <div 
                className="card" 
                style={{
                    border: `5px solid ${color}`
                }} 
                onMouseEnter={showBorder}
                onMouseLeave={hideBorder}
                onClick={() => goToPokemon(pokemon.id)}
            >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={pokemon.picture} alt={pokemon.name} width="100%"/>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{pokemon.name}</h5>
    
                        <p className="card-text">                   
                            {pokemon.types.map(type => (
                                <span 
                                    key={type} 
                                    className={`badge rounded-pillbadge rounded-pill ${formatType(type)}`}
                                >
                                    {type}
                                </span>
                            ))}
                        </p>
                        <p className="card-text"><small className="text-muted">Ajouté dans le Pokedex le : {pokemon.created}</small></p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}