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

  const [animated, setAnimated] = useState(true);
  const [disabled, setDisabled] = useState(false);

  const screenLength = useMemo(() => items.length + 6, [items]);

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
    () => (
      <>
        {/* last three element */}
        {items.slice(-3).map((item, i) => (
          <SliderItem key={item.id} {...item} />
        ))}
        {/* all elements */}
        {items.map((item, i) => (
          <SliderItem key={item.id} {...item} />
        ))}
        {/* first three element */}
        {items.slice(0, 3).map((item, i) => (
          <SliderItem key={item.id} {...item} />
        ))}
      </>
    ),
    [items]
  );

  const [displacement, setDisplacement] = useState(-2);

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

  useEffect(() => {
    if (displacement === -1) {
      setDisabled(true);
      setTimeout(() => {
        setAnimated(false);
        setDisplacement(-(screenLength - 2));
        setTimeout(() => {
          setAnimated(true);
          setDisabled(false);
        }, 100);
      }, 2061);
    } else if (displacement === -(screenLength - 1)) {
      setDisabled(true);
      setTimeout(() => {
        setAnimated(false);
        setDisplacement(-1);
        setTimeout(() => {
          setAnimated(true);
          setDisabled(false);
        }, 100);
      }, 2061);
    }
  }, [displacement, screenLength]);

  return (
    <div className="slider">
      <div
        className={`slider-content ${animated ? "slider-content-animation" : ""} ${transformMovement}`}
      >
        {renderItems}
      </div>
      <div className="slider-navigation">
        <button
          disabled={disabled}
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
          disabled={disabled}
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
