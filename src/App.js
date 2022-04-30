import Hero from "./components/hero";
import Nav from "./components/navigation";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Nav />
          <Hero />
      </header>
    </div>
  );
}

export default App;
