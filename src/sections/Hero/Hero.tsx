// images
import rectangleVector from "assets/images/rectangle-vector.svg";

// components
import { InfoSection, SponsorSection } from "./components";

// styles
import "./styles.css";

function Hero() {
  return (
    <section id="hero" className="section hero-layout">
      <InfoSection />
      <SponsorSection />
      <img
        src={rectangleVector}
        className="card-borders w-[600px] h-[257px] object-cover absolute right-0 bottom-10 desktop:hidden"
        alt="A set of vectors arranged in a rectangle pattern."
      />
    </section>
  );
}

export default Hero;
