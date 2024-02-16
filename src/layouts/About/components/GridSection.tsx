// components
import Card from "../../../components/Card/Card";

function GridSection() {
  return (
    <div className="grid-section gap-10 w-full my-20 ipadPro:px-10 ipad:px-5 mobile:px-3">
      <Card
        className="scholarship-value about-card h-full flex flex-col ipadPro:border-none"
        header="Scholarship Value"
      >
        <p className="text-5xl flex-1">€31,300</p>
        <hr className="divider my-10 ipadPro:hidden" />
        <div className="flex flex-wrap gap-10 mt-5 ipadPro:mt-10">
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
          Immerse yourself in the professional world during your apprenticeship.
          You'll learn the ropes from the best and get to apply your newly
          acquired knowledge in the field from day one.{" "}
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
  );
}

export default GridSection;
