import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function List({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isActive, setActive] = useState(false);

  const ToggleClass = () => {
    setActive(!isActive);
  };

  const getMessage = () => {
    return items.length === 0 && <p>No items found</p>;
  };

  return (
    <>
      <h1>{heading}</h1>
      {getMessage()}
      <ul className="btn-group-vertical">
        {items.map((item, index) => (
          <button
            className={
              selectedIndex === index
                ? isActive
                  ? "btn btn-secondary"
                  : "btn btn-primary"
                : "btn btn-primary"
            }
          >
            <li
              className={
                selectedIndex === index
                  ? isActive
                    ? "list-group-item active"
                    : "list-group-item"
                  : "list-group-item"
              }
              key={item}
              onClick={() => {
                setSelectedIndex(index);
                onSelectItem(item);
                ToggleClass();
              }}
            >
              {item}
            </li>
          </button>
        ))}
      </ul>
    </>
  );
}

export default List;
