import PokemonList from "./pages/pokemon-list";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PokemonList />,
    children: [
      {
        path:"pokemon/:id",
        element: <PokemonDetail />
      }
    ]
  },
]);


function App() {
  return (
   <>
     <RouterProvider router={router} />
   </>
  );
}

export default App;
