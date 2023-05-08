import React from "react";
import { useState } from "react";

function Counter({ id, removeItem }) {
  const [done, setDone] = useState(false);
  const [status, setStatus] = useState("Incomplete");

  function handleClick() {
    setDone(!done);
    updateStatus();
  }

  function updateStatus() {
    /*console.log("updateStatus, id: " + id);*/
    {
      status == "Incomplete" ? setStatus("Complete✓") : setStatus("Incomplete");
    }
  }

  return (
    <>
      <button
        className={!done ? "btn btn-secondary" : "btn btn-primary"}
        onClick={handleClick}
      >
        {status}
      </button>
      <button
        key={id}
        className="btn btn-danger clear"
        onClick={() => removeItem(id)}
      >
        Delete
      </button>
      <br />
    </>
  );
}

export default Counter;
