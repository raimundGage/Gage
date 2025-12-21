import Hello from './components/Hello';

function App() {
  var dude = {
    greetedBy: "howdy",
    name: "Gaiu",
    emoji: "🦅",
    seatNumbers: [7,9,1]
  };
 
  return (
    <div className="app">
      <Hello dude={dude}/>
    </div>
  )
}

export default App;
