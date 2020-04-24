import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person";
import Shape from "./Shape";
function App() {
  return (
    <div className="App">
      <Shape name="square" length="10" breadth="20" />
      <br />
      <br />
      <Shape name="circle" length="100" breadth="200" />
    </div>
  );
}

export default App;
