// images
import about from "../../../assets/images/about.jpg";
import circleVectors from "../../../assets/images/circle-vectors.jpg";

// components
import Column from "../../../components/Column/Column";

function InfoSection() {
  return (
    <div className="flex items-center justify-center gap-[120px] mt-20 desktop:gap-20 desktop:mt-0 ipadPro:flex-col ipadPro:gap-10">
      <div className="relative flex items-center justify-center ipadPro:-mb-[50%]">
        <img
          src={circleVectors}
          alt="A set of vectors arranged in a circular pattern."
          className="w-[438px] h-[438px] object-cover object-center"
        />
        <img
          src={about}
          className="rounded-full w-[380px] h-[380px] object-cover absolute center-horizontal center-vertical z-20"
          alt="Image of a young boy holding a backpack in a Harbor Space campus."
        />
      </div>
      <div className="w-[50%] ipadPro:w-full ipadPro:bg-primary ipadPro:px-10 z-10 max-h-[50vh]">
        <Column className="bg-white ipadPro:px-10 ipadPro:pt-[200px]">
          <h2 className="ipadPro:mt-[60px]">
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
    </div>
  );
}

export default InfoSection;
