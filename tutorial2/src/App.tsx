import ListGroup from "./components/ListGroup";

function App() {
  let items = ["one", "two", "three"];

  const handleSelectItem = (item: string) => {
    console.log(item + " Clicked");
  };

  return (
    <ListGroup
      items={items}
      heading={"This is a Heading"}
      onSelectItem={handleSelectItem}
    />
  );
}

export default App;
