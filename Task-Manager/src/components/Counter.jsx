import React from "react";
import { useState } from "react";

function Counter({ id, removeItem }) {
  const [complete, setComplete] = useState(false);
  const [status, setStatus] = useState("Incomplete");

  function handleClick() {
    setComplete(!complete);
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
        key={id}
        className={!complete ? "btn btn-secondary" : "btn btn-primary"}
        onClick={handleClick}
      >
        {status}
      </button>
      <button
        /*key={id}*/
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
