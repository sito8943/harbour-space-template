// images
import about from "../../assets/images/about.jpg";
import circleVectors from "../../assets/images/circle-vectors.jpg";

// components
import Card from "../../components/Card/Card";
import Column from "../../components/Column/Column";

// styles
import "./styles.css";

function About() {
  return (
    <section
      id="about"
      className="section flex flex-col items-center justify-center"
    >
      <div className="flex items-center justify-center gap-[120px]">
        <div className="relative flex items-center justify-center">
          <img
            src={circleVectors}
            alt="A set of vectors arranged in a circular pattern."
            className="w-[438] h-[438] object-cover object-center"
          />
          <img
            src={about}
            className="rounded-full w-[380px] h-[380px] object-cover absolute center-horizontal center-vertical"
            alt="Image of a young boy holding a backpack in a Harbor Space campus."
          />
        </div>
        <Column>
          <h2>
            About the <br /> apprenticeship
          </h2>
          <p>
            Our scholarships are designed to give talented and driven young
            people from any background access to top-class education, experience
            and network. We offer a fully-funded master's degree alongside an
            apprenticeship and a guaranteed job upon graduation.{" "}
          </p>
        </Column>
      </div>
      <div className="grid-section gap-10 w-full my-20">
        <Card
          className="scholarship-value about-card h-full flex flex-col"
          header="Scholarship Value"
        >
          <p className="text-5xl flex-1">€31,300</p>
          <hr className="divider my-10" />
          <div className="flex flex-wrap gap-10 mt-5">
            <div>
              <h3>Tuition covered</h3>
              <p>€20,900</p>
            </div>
            <div>
              <h3>Remaining</h3>
              <p>€2,000</p>
            </div>
            <div>
              <h3>Living stipend</h3>
              <p>€8,400 (€700/month)</p>
            </div>
          </div>
        </Card>
        <Card className="study-commitment about-card" header="Study commitment">
          <p className="text-2xl">3 hours / day</p>
          <hr className="small-divider" />
          <p className="work-commitment about-body">
            You will complete 15 modules to graduate. Daily classes are 3 hours,
            plus coursework to complete in your own time.
          </p>
        </Card>
        <Card className="work-commitment about-card" header="Work commitment">
          <p className="text-2xl">$31,300</p>
          <hr className="small-divider" />
          <p className="about-body">
            Immerse yourself in the professional world during your
            apprenticeship. You'll learn the ropes from the best and get to
            apply your newly acquired knowledge in the field from day one.{" "}
          </p>
        </Card>
        <div className="graduation flex items-center gap-5">
          <hr className="w-full" />
          <p className="uppercase text-base font-semibold">Graduation</p>
          <hr className="w-full" />
        </div>
        <Card className="a-full-time-contract" header="A full-time contract">
          <p className="text-2xl">1 Year / Full-Time</p>
          <hr className="small-divider" />
          <p className="about-body">
            You'll be guaranteed a 1 year contract with SCG upon graduation.{" "}
          </p>
        </Card>
      </div>
    </section>
  );
}

export default About;
