import Router from './routes'
import { BrowserRouter } from 'react-router-dom';
// hooks
import useAuth from './hooks/useAuth';
import { useEffect } from 'react';


function App() {
 const { auth, addToPokedex, setPokedex, setUserInfo} = useAuth();

 console.log("APP", auth);
useEffect(() => {
  setUserInfo({
    name: "Baptiste",
    lastname: "Bauer"
   })
}, [] )


  return (
    <BrowserRouter> 
        <Router />
    </BrowserRouter> 
  );
}

export default App;
