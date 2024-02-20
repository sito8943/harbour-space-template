import { useMemo } from "react";

// images
import chevronDown from "assets/images/chevron-down.svg";

// utils
import { Testimonial } from "utils";

// components
import SliderItem from "./SliderItem";

type SliderProp = {
  items: Testimonial[];
};

function Slider(props: SliderProp) {
  const { items } = props;

  const renderItems = useMemo(
    () => items.map((item) => <SliderItem key={item.id} {...item} />),
    [items]
  );

  return (
    <div className="z-10 flex items-center justify-center w-[100vw] overflow-hidden gap-10 ipadPro:gap-9 ipad:gap-6 mobile:gap-5">
      {renderItems}
      <div>
        <button></button>
        <button></button>
      </div>
    </div>
  );
}

export default Slider;
