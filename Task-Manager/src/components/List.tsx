import React from "react";
import { useState } from "react";
import Counter from "./Counter";

function List() {
  const [items, setItems] = useState(["0"]);

  function removeItem(/*index*/) {
    console.log("removeClicked at " /*+ index*/);
    /*setItems((old) => {
      return old.filter((_, i) => i !== index);
    });*/
  }

  function addItem() {
    setItems(items.concat("0"));
  }
  return (
    <>
      List Title
      <button className="btn btn-warning reset">Reset</button>
      <button className="btn btn-success add" onClick={addItem}>
        Add Item
      </button>
      <ul>
        {items.map((item) => (
          <Counter
            id={item.indexOf}
            /*removeItem={removeItem(item.indexOf)}*/
          ></Counter>
        ))}
      </ul>
    </>
  );
}

export default List;
