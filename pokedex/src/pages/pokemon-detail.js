import { useEffect, useState } from 'react';
import PokemonService from '../services/pokemon-services';
import { useParams, Link } from 'react-router-dom';
import Loader from '../components/loader';
//import { formatDate } from '../helpers/format-date';
//import { formatType } from '../helpers/format-type';
import { formatDate, formatType } from '../helpers';

export default function PokemonDetail() {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        PokemonService.getPokemon(+id).then(pokemon => setPokemon(pokemon));
      }, [id]);


    return (
      <div className="container text-center">
        <div className="row align-items-start">
          <div className="col">
            
          </div>
          <div className="col">
            <h1 className="text-center title" >Détail</h1>
            { pokemon ? (
            <div className="card" >
              <img src={pokemon.picture} alt={pokemon.name} style={{width: '250px', margin: '0 auto'}}/>
                <div className="card-body">
                  <h5 className="card-title">{ pokemon.name } </h5>
                  <div className="card-text">
                    <table className="bordered striped">
                      <tbody>
                        <tr> 
                          <td>Nom</td> 
                          <td><strong>{ pokemon.name }</strong></td> 
                        </tr>
                        <tr> 
                          <td>Points de vie</td> 
                          <td><strong>{ pokemon.hp }</strong></td> 
                        </tr> 
                        <tr> 
                          <td>Dégâts</td> 
                          <td><strong>{ pokemon.cp }</strong></td> 
                        </tr> 
                        <tr> 
                          <td>Types</td> 
                          <td>
                            {pokemon.types.map(type => (
                              <span 
                              key={type} 
                              className={`badge rounded-pillbadge rounded-pill ${formatType(type)}`}
                              >
                                  {type}
                              </span>
                            ))}</td> 
                        </tr> 
                        <tr> 
                          <td>Date de création</td> 
                          <td>{pokemon.created}</td> 
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <Link to="/" className="btn btn-primary">Retour</Link>
                  <Link to={`/pokemon/${pokemon.id}/edit`} className="btn btn-success">Editer</Link>
                </div>
            </div>
            ) : (
              <h4 className="text-center"><Loader /></h4>
            )}
          </div>
          <div className="col">
            
          </div>
        </div>
      </div>
      


  );
    
}