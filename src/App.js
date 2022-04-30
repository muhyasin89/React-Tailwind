import Hero from "./components/hero";
import Nav from "./components/navigation";
import Features from "./components/features";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Nav />
          <Hero />
          <Features />
      </header>
    </div>
  );
}

export default App;
