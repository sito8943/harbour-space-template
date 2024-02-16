// components
import Navbar from "./components/Navbar/Navbar";

// layouts
import Hero from "./layouts/Hero/Hero";
import About from "./layouts/About/About";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
      </main>
    </>
  );
}

export default App;
