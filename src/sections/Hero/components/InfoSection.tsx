// components
import Column from "components/Column/Column";

// image
import hand from "assets/images/hand.png";

function InfoSection() {
  return (
    <Column className="ipadPro:px-5">
      <div className="ipadPro:absolute ipadPro:top-0 ipadPro:left-0 ipadPro:pl-10 ipad:pl-5 mobile:pl-3">
        <div className="relative">
          <h2>
            Interaction Design <br /> Apprenticeship
          </h2>
          <img
            src={hand}
            className="absolute -top-[100px] -right-[100px] ipad:w-[200px] ipad:h-[200px] ipad:-top-[110px] ipad:-right-[70px]"
            alt="Image of a circle composed of texts arranged in a circular shape, with a hand in the center touching a series of rhombus-shaped vectors."
          />
        </div>
      </div>
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
