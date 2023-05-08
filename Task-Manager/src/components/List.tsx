import React from "react";
import { useState } from "react";
import Counter from "./Counter";

function List() {
  const [items, setItems] = useState(["0"]);

  const removeItem = (index: number) => {
    console.log("removeClicked at " + index);
    setItems((items) => {
      return items.filter((_, i) => i !== index - 1);
    });
  };

  function addItem() {
    setItems(items.concat("0"));
  }
  return (
    <>
      List Title <br />
      <button className="btn btn-warning reset">Reset</button>
      <button className="btn btn-success add" onClick={addItem}>
        Add Item
      </button>
      <ul>
        {items.map((item, index) => (
          <Counter key={index + 1} id={index + 1} removeItem={removeItem} />
        ))}
      </ul>
    </>
  );
}

export default List;
