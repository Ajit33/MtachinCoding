import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Jay maa Durga❤️</h1>
      <div className="Header">
        <div className="title">I can do it</div>
        <button className="copy-btn" onClick={() => {}}>
          Copy
        </button>
      </div>
      <div className="charLength">
        <span>
          <label>Charecter Length</label>
          <label>4</label>
        </span>
        <input type="range" min='4' max='20'  />
      </div>
      
    </div>
  );
}

export default App;
