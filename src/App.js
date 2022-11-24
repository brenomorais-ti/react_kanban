import React from "react";
import "./styles.css"
import Navbar from "./components/Navbar/Navbar";

function App() {  
  return (
    <div className="App">
      
      <Navbar />

      <ul className="lista">
        <li>Breno</li>
        <li>Neto</li>
        <li>Lairton</li>
        <li>Dorneles</li>
      </ul>
      
    </div>
  );
}
export default App;
