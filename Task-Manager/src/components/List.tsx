import React from "react";
import { useState } from "react";
import Counter from "./Counter";

function List() {
  const [items, setItems] = useState(["0"]);

  const removeItem = (index: number) => {
    console.log("removeClicked at " + index);
    setItems([
      ...items.slice(0, index),
      ...items.slice(index + 1, items.length),
    ]);
    /*console.log("Items: " + items);*/
  };

  function addItem() {
    setItems(items.concat("0"));
  }
  function reset() {
    setItems([]);
  }
  return (
    <>
      List Title <br />
      <button className="btn btn-warning reset" onClick={reset}>
        Reset
      </button>
      <button className="btn btn-success add" onClick={addItem}>
        Add Item
      </button>
      <ul>
        {items.map((item, index) => (
          <Counter key={index} id={index} removeItem={removeItem} />
        ))}
      </ul>
    </>
  );
}

export default List;
