import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./componet/Card";

function App() {

  return (
    <>
      <h1 class="">Hello world!</h1>
      <Card username="Chirag" dec="Software Engineer"/>
      <Card username="hitesh" dec="Metal businessman"/>
    </>
  );
}

export default App;
