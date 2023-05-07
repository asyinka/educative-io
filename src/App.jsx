import { useState } from "react";
import "./App.css";
import NavBar from "./component/NavBar";
import ProductContent from "./component/ProductContent";
import SolutionsContent from "./component/SolnContent";
import PricingContent from "./component/PricingContent";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SolutionsContent />
      <ProductContent />
      <PricingContent />
    </div>
  );
}

export default App;
