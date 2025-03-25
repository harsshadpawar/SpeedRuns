import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card.jsx";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    userName: "Harsshad",
    age: 21,
  };

  let newArr = [1, 2, 3, 4, 5];
  return (
    <>
      <h1 className="bg-green-500 text-black p-4 rounded-xl ">tailwind test</h1>
      <br></br>
      <Card username="Chai aur code" someObj={newArr} />
    </>
  );
}

export default App;
