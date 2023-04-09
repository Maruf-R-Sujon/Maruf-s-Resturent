import React from "react";
import MainComponent from "./Components/mainComponent";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
      <MainComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
