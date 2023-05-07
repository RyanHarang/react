import { useState } from "react";
import Counter from "./components/Counter";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
/*
import "bootstrap/dist/css/bootstrap.css";
*/
function App() {
  return (
    <>
      <div>
        <Counter />
        <Counter />
      </div>
    </>
  );
}

export default App;
