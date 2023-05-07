import { useState } from "react";
import "./App.css";
import NavBar from "./component/NavBar";
import SolutionsContent from "./component/SolnContent";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SolutionsContent />
    </div>
  );
}

export default App;
