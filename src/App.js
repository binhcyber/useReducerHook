import logo from "./logo.svg";
import "./App.css";
import DemoStateHook from "./DemoHooks/DemoStateHook";
import DemoUseRef from "./DemoHooks/DemoUseRef";
import DemoUseReducer from "./DemoHooks/DemoUseReducer";

function App() {
  return (
    <div className="App">
      {/* <DemoStateHook /> */}
      {/* <DemoUseRef /> */}
      <DemoUseReducer />
    </div>
  );
}

export default App;
