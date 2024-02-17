// components
import Navbar from "./components/Navbar/Navbar";

// layouts
import Hero from "./layouts/Hero/Hero";
import About from "./layouts/About/About";
import Testimonials from "./layouts/Testimonials/Testimonials";
import Faqs from "./layouts/Faqs/Faqs";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Testimonials />
        <Faqs />
      </main>
    </>
  );
}

export default App;
