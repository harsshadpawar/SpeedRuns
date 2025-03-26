import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      ></div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 rounded-2xl"></div>
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-black px-3 py-2 rounded-xl">
        <button
          onClick={() => {
            setColor("red");
          }}
          className="outline-none px-4 py-1"
          style={{ backgroundColor: "red" }}
        >
          Red
        </button>
        <button
          onClick={() => {
            setColor("orange");
          }}
          className="outline-none px-4 py-1"
          style={{ backgroundColor: "orange" }}
        >
          Orange
        </button>
        <button
          onClick={() => {
            setColor("yellow");
          }}
          className="outline-none px-4 py-1"
          style={{ backgroundColor: "yellow" }}
        >
          Yellow
        </button>
        <button
          onClick={() => {
            setColor("green");
          }}
          className="outline-none px-4 py-1"
          style={{ backgroundColor: "green" }}
        >
          Green
        </button>
        <button
          onClick={() => {
            setColor("blue");
          }}
          className="outline-none px-4 py-1"
          style={{ backgroundColor: "blue" }}
        >
          Blue
        </button>
        <button
          onClick={() => {
            setColor("indigo");
          }}
          className="outline-none px-4 py-1"
          style={{ backgroundColor: "indigo" }}
        >
          Indigo
        </button>
        <button
          onClick={() => {
            setColor("violet");
          }}
          className="outline-none px-4 py-1"
          style={{ backgroundColor: "violet" }}
        >
          violet
        </button>
      </div>
    </>
  );
}

export default App;
