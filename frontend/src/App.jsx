import { Button } from "./pieces/Button";
import { Marquee } from "./pieces/Marquee";
import { RetroWindow } from "./components/RetroWindow";
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

        {/* Button */}
        <Button buttonText={"mrowwww"} />
      </section>

      {/* Load The Image Inside The Window Component */}
      <RetroWindow
        title={"some_cats"}
        imageSource={
          "https://pbs.twimg.com/media/G803GDrb0AA6H-M?format=jpg&name=large"
        }
      />

      {/* Practicing To Replicate The Old Window */}
      <div className="mt-3">
        <Window
          title={"grantly_<3_<3"}
          content={"I'm Raimund Gage!"}
          grantlyIMG={"https://safebooru.org//samples/526/sample_4cb885ea2fd808a9ea3ad81bb44aa13da4c9a9f8.jpg"}
        />
      </div>
    </article>
  );
}

export default App;
