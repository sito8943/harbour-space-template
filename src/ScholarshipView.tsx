import { useQueryClient, useQuery } from "react-query";

// utils
import { ReactQueryKeys } from "utils";

// components
import { Navbar, SplashScreen, StickyBar } from "components";

// sections
import { About, Faqs, Hero, Testimonials } from "sections";

// providers
import { ScholarshipProvider } from "providers";

function ScholarshipView() {
  // Access the client
  const queryClient = useQueryClient();

  // Queries
  const scholarshipQuery = useQuery(ReactQueryKeys.Scholarships, getTodos);

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
