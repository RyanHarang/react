import React from "react";
import { useState } from "react";
import Counter from "./Counter";

function List() {
  const [items, setItems] = useState(["0"]);
  const [count, setCount] = useState(0);

  const removeItem = (key: number) => {
    console.log("removeClicked at key: " + key);
    /*setList([...list.slice(0, index), ...list.slice(index + 1, list.length)]);*/
    setList(
      list.filter((cont) => {
        console.log("cont.key = " + cont.key + " and key = " + key);
        console.log(cont.key !== key);
        return cont.key !== key;
      })
    );
    /*console.log("Items: " + items);*/
  };

  const [list, setList] = useState([
    <Counter key={count} id={count} removeItem={removeItem} />,
  ]);

  const addItem = () => {
    /*setItems(items.concat("0"));*/
    setCount(count + 1);
    console.log("Count = " + count);
    setList(
      list.concat(<Counter key={count} id={count} removeItem={removeItem} />)
    );
  };
  function reset() {
    /*setItems(items.map((item) => item.updateStatus()));*/
    setList([]);
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
      <br />
      {list}
      {/* <ul>
        {items.map((item, index) => (
          <Counter key={index} id={index} removeItem={removeItem} />
        ))}
      </ul> */}
    </>
  );
}

export default List;
