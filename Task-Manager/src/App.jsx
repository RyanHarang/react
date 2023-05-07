import { useState } from "react";
import Counter from "./components/Counter";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import "bootstrap/dist/css/bootstrap.css";
import List from "./components/List";

function App() {
  return (
    <>
      <div>
        <List />
      </div>
    </>
  );
}

export default App;
