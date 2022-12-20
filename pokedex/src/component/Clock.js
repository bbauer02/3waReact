import { useState } from "react";



export default function Clock() {

  const time = 1000;

  const tick = () => {
    setTimeout(() => setTimer(new Date()), time);
  }
  
  const [timer, setTimer] = useState(new Date()); 


  tick();

  return (
    <p>{timer.toLocaleTimeString()}</p>
  );

}