import Welcome from "./component/Welcome/Welcome";
import Header from "./component/Header";
import Clock from "./component/Clock";
export default function App() {

  const roles = ["admin", "modérateur", "maître Pokémon"];


  const myFunction = () => {
      console.log( "Hello World" );
  }

/**
  <Header /> 
  <Clock />
  <Welcome onClick={myFunction} prenom="Mathilde" nom="Marchand" isAdmin={true} age ={12} roles= {roles} />
*/
  return (
    
      <>
      </>
  );
}

