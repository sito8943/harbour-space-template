import { useCallback, useEffect, useMemo, useState } from "react";
import { css } from "@emotion/css";

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

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const onWindowResize = useCallback(
    () => setWindowWidth(window.innerWidth),
    [setWindowWidth]
  );

  useEffect(() => {
    window.addEventListener("resize", onWindowResize);
    return () => {
      window.removeEventListener("resize", onWindowResize);
    };
  }, [onWindowResize]);

  const renderItems = useMemo(
    () => items.map((item) => <SliderItem key={item.id} {...item} />),
    [items]
  );

  const [displacement, setDisplacement] = useState(0);

  const currentSizeDisplacementOffset = useMemo(() => {
    switch (true) {
      case windowWidth <= 375:
        return 350;
      case windowWidth <= 768:
        return 400;
      case windowWidth <= 834:
        return 735;
      default:
        return 840;
    }
  }, [windowWidth]);

  const transformMovement = useMemo(
    () =>
      css({
        transform: `translateX(${currentSizeDisplacementOffset * displacement}px)`,
      }),
    [currentSizeDisplacementOffset, displacement]
  );

  const moveForward = () => setDisplacement(displacement - 1);

  const moveBackward = () => setDisplacement(displacement + 1);

  return (
    <div className="slider">
      <div className={`slider-content ${transformMovement}`}>{renderItems}</div>
      <div className="slider-navigation">
        <button
          onClick={moveBackward}
          className="slider-nav-button image-borders"
        >
          <img
            className="w-4 h-4 rotate-90"
            src={chevron}
            alt="leftward pointing chevron icon"
          />
        </button>
        <button
          onClick={moveForward}
          className="slider-nav-button image-borders"
        >
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
