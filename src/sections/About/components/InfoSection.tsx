// images
import about from "assets/images/about.jpg";
import circleVectors from "assets/images/circle-vectors.jpg";

// components
import { Column } from "components";

// providers
import { useScholarship } from "providers";
import { renderArrayOfHtml } from "utils";

function InfoSection() {
  const { scholarship } = useScholarship();

  return (
    <div className="flex items-center justify-center gap-[120px] mt-20 desktop:gap-20 ipadPro:flex-col ipadPro:gap-10">
      <div className="relative flex items-center justify-center ipadPro:-mb-[51%]">
        <img
          src={circleVectors}
          alt="A set of vectors arranged in a circular pattern."
          className="w-[438px] h-[438px] ipadPro:w-[90%] ipadPro:h-full object-cover object-center"
        />
        <img
          src={about}
          className="rounded-full w-[380px] h-[380px] ipad:w-[80%] ipad:h-[85%] object-cover absolute center-horizontal center-vertical z-20"
          alt="Image of a young boy holding a backpack in a Harbor Space campus."
        />
      </div>
      <div className="w-[50%] ipadPro:w-full ipadPro:bg-primary z-10 max-h-[50vh] ipadPro:px-10 ipad:px-5">
        <Column className="gap-15 bg-white ipadPro:px-10 ipad:px-7 ipadPro:-mb-20 ipadPro:pt-40 ipad:pt-40 mobile:pt-20 ipadPro:pb-20 mobile:pb-10 ipadPro:border-[1px] ipadPro:border-[#DADADA] rounded-b-[5px]">
          <h2 className="ipadPro:mt-[60px]">
            About the <br /> apprenticeship
          </h2>
          {renderArrayOfHtml(scholarship.about)}
        </Column>
      </div>
    </div>
  );
}

export default InfoSection;
