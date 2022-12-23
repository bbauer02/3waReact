import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {formatType} from '../helpers';
import PokemonServices from "../services/pokemon-services";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
    name: yup.string().required()
}).required();

  const types = [
    { name : "Plante", id: "plante" },
    { name : "Poison", id: "poison"},
    { name : "Feu", id: "feu"},
    { name :"Eau", id: "eau"},
    { name :"Insecte", id: "insecte"},
    { name :"Normal", id: "normal"},
    { name :"Vol", id: "vol"},
    { name :"Electrik", id: "electrik"},
    { name :"Fée", id: "fee"},
  ];


export default function PokemonForm({pokemon=null, isEdit}) {
    const navigate = useNavigate();

    const onSubmit = (data) => {
        if(isEdit) {
            PokemonServices.edit(pokemon.id, data);
            navigate(`/pokemon/${pokemon.id}`);
        }
        else {
            PokemonServices.add(data);
            navigate(`/pokemon`);
        }
    } 

    const { register, handleSubmit, formState:{ errors } } = useForm({
        defaultValues: {
            name: pokemon?.name || "",
            hp: pokemon?.hp || "",
            cp: pokemon?.cp || "",
            picture: pokemon?.picture || "",
            types : pokemon?.types || []
        },
        resolver: yupResolver(schema)
      });

    return (
        <>
            <h1>{isEdit ? "Edition d'un Pokémon" : "Ajout d'un Pokémon"}</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <p>{errors.name?.message}</p>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nom :</label>
                    <input aria-describedby="ariaNom" {...register("name")} type="text" className={`form-control ${errors.name? "is-invalid" : ""}`} id="name" placeholder="Nom du Pokémon" />
                    <div id="ariaNom" className="invalid-feedback">
                       Le nom est obligatoire !!
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="hp" className="form-label">Points de vie :</label>
                    <input {...register("hp")} type="text" className="form-control" id="hp" placeholder="Points de vie" />
                </div>
                <div className="mb-3">
                    <label htmlFor="cp" className="form-label">Points de combat :</label>
                    <input {...register("cp")} type="text" className="form-control" id="cp" placeholder="Point de combat" />
                </div>
                <div className="mb-3">
                    <label htmlFor="picture" className="form-label">Url de l'image :</label>
                    <input {...register("picture")} type="text" className="form-control" id="picture" placeholder="Url de l'image" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Type :</label>
                </div>
                {
                    types.map( type => (
                        <div  key={type.id} className="form-check">                  
                            <input 
                                {...register("types")}
                                className="form-check-input" 
                                type="checkbox" 
                                value={type.name} 
                                id={type.id} 
                                />
                            <label className="form-check-label" htmlFor={type.id}>
                                <span 
                                    className={`badge rounded-pillbadge rounded-pill ${formatType(type.name)}`}
                                    >  
                                    {type.name}
                                </span>
                            </label>
                        </div>
                    ))
                }
                
                <br />
                <input className="btn btn-outline-primary" type="submit" value={isEdit? "Modifier" : "Ajouter au Pokédex"}/>
            </form>
        </>
    )
}