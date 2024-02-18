// components
import { Navbar, SplashScreen, StickyBar } from "./components";

// sections
import { About, Faqs, Hero, Testimonials } from "./sections";

// providers
import { ScholarshipProvider } from "./providers";

function ScholarshipView() {
  return (
    <ScholarshipProvider data={scholarshipQuery?.data}>
      <SplashScreen />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Testimonials />
        <Faqs />
      </main>
      <StickyBar />
    </ScholarshipProvider>
  );
}

export default ScholarshipView;
