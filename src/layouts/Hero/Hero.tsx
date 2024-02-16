// images
import rectangleVector from "../../assets/images/rectangle-vector.png";

// components
import TextGroup from "./components/TextGroup";
import InfoSection from "./components/InfoSection";
import SponsorSection from "./components/SponsorSection";
import Column from "../../components/Column/Column";

// styles
import "./styles.css";

function Hero() {
  return (
    <section id="hero" className="section hero-layout">
      <InfoSection />
      <SponsorSection />
      <Column className="show-on-tablet">
        <TextGroup />
      </Column>
      <img
        src={rectangleVector}
        className="card-borders w-[600px] h-[257px] object-cover absolute right-0 bottom-10 desktop:hidden"
        alt="A set of vectors arranged in a rectangle pattern."
      />
    </section>
  );
}

export default Hero;
