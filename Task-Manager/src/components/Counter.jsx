import React from "react";
import { useState } from "react";

function Counter({ id /*removeItem*/ }) {
  const [done, setDone] = useState(false);
  const [status, setStatus] = useState("Incomplete");

  function handleClick() {
    setDone(!done);
    updateStatus();
  }

  function handleDelete() {
    setDone(false);
    {
      status == "Complete✓" ? updateStatus() : null;
    }
  }

  function updateStatus() {
    {
      status == "Incomplete" ? setStatus("Complete✓") : setStatus("Incomplete");
    }
  }

  return (
    <>
      <button
        key={id}
        className={!done ? "btn btn-secondary" : "btn btn-primary"}
        onClick={handleClick}
      >
        {status}
      </button>
      <button key={id} className="btn btn-danger clear" onClick={removeItem}>
        Delete
      </button>
      <br />
    </>
  );
}

export default Counter;
