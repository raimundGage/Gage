import { Marquee } from "./pieces/Marquee";
import { Button } from "./pieces/Button";
import { Window } from "./components/Window";

function App() {
  return (
    <article className="App">

      <Marquee marqueeText={"Gage"}/>
      <Marquee marqueeText={"Gage"}/>

      <Button buttonLabel={"Meow"} />

      {/* Load The Image Inside The Window Component */}
      <Window title={"Meow"} content={"Meow!"} contentImage={"https://pbs.twimg.com/media/G9QKrZZbAAExI13?format=jpg&name=large"} />
      <Window title={"Nyah"} content={"Nyah!"} contentImage={"https://pbs.twimg.com/media/G9QKrZZbAAExI13?format=jpg&name=large"} />

    </article>
  );
}

export default App;
