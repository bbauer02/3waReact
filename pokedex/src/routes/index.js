import PokemonList from "../pages/pokemon-list";
import PokemonDetail from "../pages/pokemon-detail";

import {
    useRoutes
  } from "react-router-dom";
import PokemonEdit from "../pages/pokemon-edit";

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
                element: <PokemonEdit />
              }
            ],
      },
      {
        path: "/",
        element: <PokemonList />,
      },
    ]);
  } 
  




