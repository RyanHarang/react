import List from "./components/List";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let items = ["one", "two", "three"];
  let header = "Heading";

  const handleSelectItem = (item: string) => {
    console.log(item + " Clicked");
  };

  return (
    <>
      <List items={items} heading={header} onSelectItem={handleSelectItem} />
    </>
  );
}

export default App;
