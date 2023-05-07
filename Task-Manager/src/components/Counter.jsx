import React from "react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button
      className={count === 0 ? "btn btn-secondary" : "btn btn-primary"}
      onClick={handleClick}
    >
      Count = {count}
    </button>
  );
}

export default Counter;
