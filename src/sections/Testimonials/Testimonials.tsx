import { css } from "@emotion/css";

// images
import rectangleVector from "assets/images/rectangle-vector.svg";
import primaryRectangleVector from "assets/images/main-rectangle.png";

// providers
import { useScholarship } from "providers";

// components
import { Slider } from "./components";

function Testimonials() {
  const { testimonials } = useScholarship();

  return (
    <section
      id="testimonials"
      className="section w-full flex mb-20 relative !px-0"
    >
      <div className="absolute top-0 left-[50%] -translate-x-[50%] w-full flex justify-center ipadPro:bg-primary">
        <div
          className={`image-borders w-[80%] h-[395px] ipadPro:w-full ipadPro:border-none ${css(
            {
              backgroundImage: `url(${rectangleVector})`,
              "@media (max-width: 834px)": {
                backgroundImage: `url(${primaryRectangleVector})`,
              },
            }
          )}`}
        />
      </div>
      {/* IMPORTANT AS API DOESN'T BRING TESTIMONIALS WILL US EXAMPLE ONLY FOR SHOWN */}
      <Slider
        items={
          testimonials.length
            ? testimonials
            : [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
        }
      />
    </section>
  );
}

export default Testimonials;
