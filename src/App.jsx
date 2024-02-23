import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const name = "Awelker";
  const handleNamChange = () => {
    const names = ["Awelker", "Fuad", "Sumeya", "Eman"];

    const randompicker = Math.floor(Math.random() * 4);
    return names[randompicker];
  };
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>Hello {handleNamChange()}!</div>
    </>
  );
}

export default App;
