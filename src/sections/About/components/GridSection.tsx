// components
import { Card } from "components";

// providers
import { useScholarship } from "providers";

function GridSection() {
  const { scholarship } = useScholarship();

  return (
    <div className="grid-section gap-10 w-full my-20 ipadPro:mt-40 ipad:mt-[300px] ipadPro:px-10 ipad:px-5 mobile:px-3">
      <Card
        className="scholarship-value about-card h-full flex flex-col ipadPro:border-none"
        header="Scholarship Value"
      >
        <p className="text-5xl ipadPro:text-2xl flex-1">
          €{scholarship.total_value.toLocaleString()}
        </p>
        <hr className="divider my-[55px] ipadPro:hidden" />
        <div className="flex flex-wrap gap-10 mt-5 desktop:gap-5 ipadPro:mt-10">
          <div>
            <h3>Tuition covered</h3>
            <p className="text-base ipadPro:text-2xl">
              €{scholarship.tuition.toLocaleString()}
            </p>
          </div>
          <div>
            <h3>Remaining</h3>
            <p className="text-base ipadPro:text-2xl">
              €
              {(scholarship.total_value - scholarship.tuition).toLocaleString()}
            </p>
          </div>
          <div>
            <h3>Living stipend</h3>
            <p className="text-base ipadPro:text-2xl">
              €{scholarship.stipend_per_year.toLocaleString()} (€
              {scholarship.stipend_per_month.toLocaleString()}
              /month)
            </p>
          </div>
        </div>
      </Card>
      <Card className="study-commitment about-card" header="Study commitment">
        <p className="text-2xl">{scholarship.study_commitment} hours / day</p>
        <hr className="small-divider" />
        <p className="work-commitment about-body">
          {scholarship.study_commitment_text}
        </p>
      </Card>
      <Card className="work-commitment about-card" header="Work commitment">
        <p className="text-2xl">
          {scholarship.internship_commitment} hours / day
        </p>
        <hr className="small-divider" />
        <p className="about-body">{scholarship.internship_commitment_text}</p>
      </Card>
      <div className="graduation flex items-center gap-5">
        <hr className="w-full" />
        <p className="uppercase text-base font-semibold">Graduation</p>
        <hr className="w-full" />
      </div>
      <Card className="a-full-time-contract" header="A full-time contract">
        <p className="text-2xl">{scholarship.duration} Year / Full-Time</p>
        <hr className="small-divider" />
        <p className="about-body">
          You'll be guaranteed a {scholarship.duration} year contract with SCG
          upon graduation.{" "}
        </p>
      </Card>
    </div>
  );
}

export default GridSection;
