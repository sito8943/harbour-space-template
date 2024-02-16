// images
import about from "../../assets/images/about.jpg";
import circleVectors from "../../assets/images/circle-vectors.jpg";

// components
import Card from "../../components/Card/Card";
import Column from "../../components/Column/Column";

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
      <div>
        <div>
          <Card header="Scholarship Value">
            <p className="text-5xl">$31,300</p>
          </Card>
        </div>
        <div>
          <div>
            <Card header="Scholarship Value">
              <p className="text-5xl">$31,300</p>
            </Card>
            <Card header="Scholarship Value">
              <p className="text-5xl">$31,300</p>
            </Card>
          </div>
          <div></div>
          <Card header="A full-time contract">
            <p></p>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default About;
