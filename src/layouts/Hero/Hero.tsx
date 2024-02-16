// images
import zeptolab from "../../assets/images/zeptolab.svg";

// components
import Card from "../../components/Card/Card";
import Column from "../../components/Column/Column";
import GridCard from "./components/GridCard";

function Hero() {
  return (
    <section
      id="hero"
      className="section flex items-center justify-center gap-[120px]"
    >
      <Column>
        <h2>
          Interaction Design <br /> Apprenticeship
        </h2>
        <p className="font-semibold">
          A fully funded work-study program to launch your tech career{" "}
        </p>
        <p>
          Harbour.Space has partnered with SCG to empower driven talent and
          eliminate the barriers to accessing exceptional education and career
          opportunities through a Masters Fellowship.{" "}
        </p>
        <p>
          <b>Position</b>: Marketing Performance
        </p>
        <a>
          <button className="cta-primary">Apply now</button>
        </a>
      </Column>
      <Column>
        <div className="flex items-center gap-10">
          <img src={zeptolab} alt="zeptolab's logo" />
          <div>
            <p className="text-lg">Powered by:</p>
            <p>Zeptolab</p>
          </div>
        </div>
        <Card header="Application closes in" className="w-full">
          <p className="text-2xl">6 Day : 22 Hrs : 56 Min : 13 Seg</p>
        </Card>
        <GridCard />
      </Column>
    </section>
  );
}

export default Hero;
