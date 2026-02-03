import { Plants } from "./components/Plants";
import { ChomperSay } from "./components/ChomperSay";
import {Nickle} from "./components/Nickle";

function App() {
  return (
    <section className="App">
      <ChomperSay />
      <Plants />
      <Nickle name="Nickle" age="27"/>
    </section>
  );
}

export default App;
