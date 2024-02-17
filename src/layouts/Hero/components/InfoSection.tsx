// components
import Column from "../../../components/Column/Column";

function InfoSection() {
  return (
    <Column className="ipadPro:px-5">
      <h2 className="ipadPro:absolute ipadPro:top-0">
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
      <p className="my-7">
        <b>Position</b>: Marketing Performance
      </p>
      <a
        href="#"
        aria-label="go to apply to the scholarship"
        className="cta-primary"
      >
        Apply now
      </a>
    </Column>
  );
}

export default InfoSection;
