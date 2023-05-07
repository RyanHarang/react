import React from "react";
import { useState } from "react";

function Counter() {
  const [done, setDone] = useState(false);
  const [status, setStatus] = useState("Incomplete");

  function handleClick() {
    setDone(!done);
    updateStatus();
  }

  function handleClear() {
    setDone(false);
    updateStatus();
  }

  function updateStatus() {
    {
      status == "Incomplete" ? setStatus("Complete") : setStatus("Incomplete");
    }
  }

  return (
    <>
      <button
        className={!done ? "btn btn-secondary" : "btn btn-primary"}
        onClick={handleClick}
      >
        This taks is {status}
      </button>
      <button className="btn btn-secondary clear" onClick={handleClear}>
        Clear
      </button>
      <br />
    </>
  );
}

export default Counter;
