import { useState, createContext } from 'react';
import PropTypes from 'prop-types';


const initialState = {
    user: {},
    pokedex: []
  };


  export const AuthContext = createContext({
    ...initialState,
    setUserInfo: () => {},
    setPokedex: () => {},
    addToPokedex: () => {}
  });

  AuthContextProvider.propTypes = {
    children: PropTypes.node
  };
  function AuthContextProvider({ children }) {
    const [auth, setauth] = useState(initialState);

    function addToPokedex(pokemon) {
      const newContextData = { ...auth, pokedex: [...auth.pokedex, pokemon] };
      setauth(newContextData);
    }

     function setPokedex(pokedex) {
        const newContextData = {...auth, pokedex: [...pokedex]};
        setauth(newContextData);
     }

     function setUserInfo(userInfo) {
        const newContextData = { user : {...userInfo}, pokedex:[...auth.pokedex]};
        setauth(newContextData);
     }

     const value = { auth,addToPokedex,setPokedex,setUserInfo };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;

  }

  export default AuthContextProvider;



  