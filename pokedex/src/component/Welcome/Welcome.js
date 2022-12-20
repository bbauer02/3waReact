import {useState} from "react";

import PropTypes  from 'prop-types';
import Admin from '../Admin/Admin';
import './Welcome.css';

Welcome.propTypes = {
  nom: PropTypes.string,
  prenom: PropTypes.string,
  age: PropTypes.number,
  isAdmin : PropTypes.bool,
  roles : PropTypes.array,
  onClick : PropTypes.func
}

export default function Welcome ({nom, prenom, age, isAdmin, roles, onClick}) {

  const childFunct = (e) => {
    console.log(e.target.textContent)
  }

  const [activeId, setActiveId] = useState(-1);

  return (
    <div>
      <p onClick={onClick}>Bienvenue, {nom} {prenom} </p>
      { 
        isAdmin ? 
          <Admin  prenom={prenom} nom={nom} />
        :  
          <p>Vous êtes un simple visiteur !!</p>
      }


      {
        age > 18 ?
          <p>Vous êtes majeur</p> 
          :
          <p>Vous êtes mineur</p>
      }

      <ul>
      {
        roles.map((role,id) => 
        (
          <li onClick={() => setActiveId(id)} key={id}  className={activeId === id ? "yellow" : ""}>
            {role}   
          </li>
        ))
      }
      </ul>
    </div>   
  );
}

