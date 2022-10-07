import Keypad from "./components/Keypad";
import "./App.css";
import LCD from "./components/LCD";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  return (
    <div className="App">
      <LCD value={value} />
      <Keypad value={value} setValue={setValue} />
    </div>
  );
}

export default App;
