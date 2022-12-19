import Welcome from "./component/Welcome/Welcome";
import Header from "./component/Header";

export default function App() {

  const roles = ["admin", "modérateur", "maître Pokémon"];


  const myFunction = () => {
      console.log( "Hello World" );
  }


  return (
    
      <>
        <Header /> 
        <Welcome onClick={myFunction} prenom="Mathilde" nom="Marchand" isAdmin={true} age ={12} roles= {roles} />
      </>
  );
}

