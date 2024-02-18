// sections
import { GridSection, InfoSection } from "./components";

// styles
import "styles.css";

function About() {
  return (
    <section
      id="about"
      className="section flex flex-col items-center justify-center ipadPro:p-0"
    >
      <InfoSection />
      <GridSection />
    </section>
  );
}

export default About;
