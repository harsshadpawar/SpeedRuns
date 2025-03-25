import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(10);

  //let counter = 5;

  const addValue = () => {
    if (counter >= 20) {
      alert("You reached the higher limit.");
    } else {
      //return counter++;
      setCounter(counter + 1);
      //console.log("value added:", counter);
    }
  };

  const removeValue = () => {
    //return counter--;
    if (counter <= 0) {
      alert("You reached the lower limit.");
    } else {
      setCounter(counter - 1);
      //console.log("value removed:", counter);
    }
  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Count Value : {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>footer : {counter}</p>
    </>
  );
}

export default App;
