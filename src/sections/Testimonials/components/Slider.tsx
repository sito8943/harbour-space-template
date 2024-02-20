import { useMemo } from "react";

// images
import chevron from "assets/images/chevron-down.svg";

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
    <div className="slider">
      <div className="slider-content">{renderItems}</div>
      <div className="slider-navigation">
        <button className="slider-nav-button image-borders">
          <img
            className="w-4 h-4 rotate-90"
            src={chevron}
            alt="leftward pointing chevron icon"
          />
        </button>
        <button className="slider-nav-button image-borders">
          <img
            className="w-4 h-4 rotate-[270deg]"
            src={chevron}
            alt="leftward pointing chevron icon"
          />
        </button>
      </div>
    </div>
  );
}

export default Slider;
