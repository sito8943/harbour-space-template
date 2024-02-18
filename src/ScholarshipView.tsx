// components
import Navbar from "components/Navbar/Navbar";
import StickyBar from "components/StickyBar/StickyBar";
import SplashScreen from "components/SplashScreen/SplashScreen";

// sections
import Hero from "sections/Hero/Hero";
import About from "sections/About/About";
import Testimonials from "sections/Testimonials/Testimonials";
import Faqs from "sections/Faqs/Faqs";

// providers
import { ScholarshipProvider } from "providers/Scholarship/ScholarshipProvider";

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
