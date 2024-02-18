// components
import Navbar from "./components/Navbar/Navbar";
import StickyBar from "./components/StickyBar/StickyBar";

// sections
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Testimonials from "./sections/Testimonials/Testimonials";
import Faqs from "./sections/Faqs/Faqs";

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
      <StickyBar />
    </>
  );
}

export default App;
