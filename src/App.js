import Hero from "./components/hero";
import Nav from "./components/navigation";
import Features from "./components/features";
import DownloadExtension from "./components/download-extension";
import ContactUs from "./components/contact-us";
import FAQ from "./components/faq";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Nav />
          <Hero />
          <Features />
          <DownloadExtension />
          <FAQ />
          <ContactUs />
          <Footer />
      </header>
    </div>
  );
}

export default App;
