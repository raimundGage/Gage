import { Marquee } from "./pieces/Marquee";
import { Window } from "./components/Window";

function App() {
  const favorites = [
    { icon: "🐯", name: "Grantly Bell", from: "Knights College" },
    { icon: "🐺", name: "Albert", from: "Intermarché - Conte de Noël" },
    { icon: "🐲", name: "Cold Snapdragon", from: "Plants VS Zombies 2" },
  ];

  return (
    <article className="App">
      <section>
        {/* Scrolling Marquee Of My Faves */}
        <div>
          {favorites.map((favs) => {
            return (
              <Marquee
                key={favs.name}
                icon={favs.icon}
                name={favs.name}
                from={favs.from}
              />
            );
          })}
        </div>
      </section>

      {/* Load The Image Inside The Window Component */}
      <Window title={"Meow"} content={"Meow!"} contentImage={"https://pbs.twimg.com/media/G9QKrZZbAAExI13?format=jpg&name=large"} />
      <Window title={"Meow"} content={"Meow!"} contentImage={"https://pbs.twimg.com/media/G9QKrZZbAAExI13?format=jpg&name=large"} />

    </article>
  );
}

export default App;
