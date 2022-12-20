import { useState, useEffect } from "react";


export default function Counter() {
  const [count, setCount] = useState(0);
  const [ id, setId] = useState(1);
  const [ pokemonDetail, setPokemonDetail] = useState([]);





  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}