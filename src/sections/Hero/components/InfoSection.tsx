// components
import { Column } from "components";

// image
import hand from "assets/images/hand.png";

// providers
import { useScholarship } from "providers";

// utils
import { renderArrayOfHtml } from "utils";

function InfoSection() {
  const { scholarship } = useScholarship();

  return (
    <Column className="ipadPro:px-5">
      <div className="ipadPro:absolute ipadPro:top-0 ipadPro:left-0 ipadPro:pl-10 ipad:pl-5 mobile:pl-3">
        <div className="relative">
          <h2>{scholarship.name}</h2>
          <img
            src={hand}
            className="absolute -top-[100px] -right-[100px] ipad:w-[200px] ipad:h-[200px] ipad:-top-[110px] ipad:-right-[70px] mobile:-right-[15px]"
            alt="Image of a circle composed of texts arranged in a circular shape, with a hand in the center touching a series of rhombus-shaped vectors."
          />
        </div>
      </div>
      {renderArrayOfHtml(scholarship.description)}
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
