import List from "./components/List";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let items = ["one", "two", "three"];

  const handleSelectItem = (item: string) => {
    console.log(item + " Clicked");
  };

  return (
    <List
      items={items}
      heading={"This is a Heading"}
      onSelectItem={handleSelectItem}
    />
  );
}

export default App;
