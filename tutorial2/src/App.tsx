import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button color="secondary" onClick={() => console.log("Clicked")}>
        Text
      </Button>
    </div>
  );
}

export default App;
