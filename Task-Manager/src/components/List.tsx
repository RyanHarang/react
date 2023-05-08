import React from "react";
import { useState } from "react";
import Counter from "./Counter";

function List() {
  const [items, setItems] = useState(["0"]);
  const [count, setCount] = useState(1);

  const removeItem = (key: number) => {
    console.log("removeClicked at key: " + key);
    /*setList([...list.slice(0, index), ...list.slice(index + 1, list.length)]);*/
    /*const newList: Array<typeof Counter> = [];*/

    /*
      const newList = [<Counter key={0} id={0} removeItem={removeItem} />];

      for (let i = 0; i < list.length; i++) {
      list[i].props.id !== key ? newList.concat(list[i]) : null;
    }
    */

    /*setList(newList);*/
    setList(list.filter((obj) => obj.props.id !== key));
  };

  const [list, setList] = useState([
    <Counter key={0} id={0} removeItem={removeItem} />,
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
