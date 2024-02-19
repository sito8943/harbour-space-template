// images
import rectangleVector from "assets/images/rectangle-vector.svg";

// components
import { SliderItem } from "./components";

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section w-full flex mb-20 relative !px-0"
    >
      <div className="absolute top-0 left-[50%] -translate-x-[50%] w-full flex justify-center ipadPro:bg-primary">
        <img
          src={rectangleVector}
          className="image-borders w-[80%] h-[395px] object-cover"
          alt="A set of vectors arranged in a rectangle pattern."
        />
      </div>
      <div className="z-10 flex items-center justify-center w-[100vw] overflow-hidden gap-10 ipadPro:gap-9 ipad:gap-6 mobile:gap-5">
        <SliderItem />
        <SliderItem />
        <SliderItem />
      </div>
    </section>
  );
}

export default Testimonials;
