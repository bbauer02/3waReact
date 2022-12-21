import PokemonList from "../pages/pokemon-list";
import PokemonDetail from "../pages/pokemon-detail";
import PokemonForm from "../components/pokemonForm";

import {
    useRoutes
  } from "react-router-dom";

  export default function Router() {
    return useRoutes([
      {
        path: "pokemon",
        children: 
            [
              { 
                path: ":id", 
                element: <PokemonDetail />
              },
              { 
                path: ":id/edit", 
                element: <PokemonForm />
              }
            ],
      },
      {
        path: "/",
        element: <PokemonList />,
      },
    ]);
  } 
  




