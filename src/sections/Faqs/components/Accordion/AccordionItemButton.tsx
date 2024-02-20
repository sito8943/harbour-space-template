import { ButtonHTMLAttributes, useEffect, useRef } from "react";

const OUTLINE_OFF_COLOR = "#dadada";
const OUTLINE_ON_COLOR = "#6761c0";

const switchClasses = (
  elemRef: any,
  classNameOld: string,
  classNameNew: string
) => {
  elemRef.classList.remove(classNameOld);
  elemRef.classList.add(classNameNew);
};

type AccordionItemButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  opened: Boolean;
};

function AccordionItemButton(props: AccordionItemButton) {
  const { opened, onClick, ...rest } = props;

  const btn = useRef<HTMLButtonElement>(null);
  const backCircle = useRef<HTMLDivElement>(null);
  const innerCircle = useRef<HTMLDivElement>(null);
  const plusContainer = useRef<HTMLDivElement>(null);
  const plusHor = useRef<HTMLDivElement>(null);
  const plusVer = useRef<HTMLDivElement>(null);
  const outlineBack = useRef<any>(null);
  const outline = useRef<any>(null);

  const outlineLength = outline.current?.getTotalLength();
  if (outline.current !== null) {
    outline.current.style.strokeDasharray = outlineLength;
    outline.current.style.strokeDashoffset = outlineLength;
  }

  const openBtn = () => {
    // set new button state
    // btnState = "open";
    // disabling the button until the animation finish
    if (btn.current !== null) btn.current.disabled = true;

    const animateInnerPart = () => {
      // animate the inner circle
      innerCircle.current?.classList.add("small-inner-circle");

      // remove open-to-close plus animation and add the new close-to-open animation
      switchClasses(
        plusHor.current,
        "animate-plus-hor-open-to-close",
        "animate-plus-hor-close-to-open"
      );

      switchClasses(
        plusVer.current,
        "animate-plus-ver-open-to-close",
        "animate-plus-ver-close-to-open"
      );

      // the inner-part is the last part of the animation in close-to-open
      if (btn.current !== null) btn.current.disabled = false;
    };
    const animationOuterDuration = 500;
    let intervalId: any;
    const animateOuterPart = () => {
      // remove gray style and add the new one
      if (plusHor.current !== null)
        plusHor.current.className = "plus-hor main-color";
      if (plusVer.current !== null)
        plusVer.current.className = "plus-ver main-color";

      if (plusContainer.current !== null)
        plusContainer.current.classList.add("rotate-icon-forwards");

      let currentTime = 0;
      const duration = animationOuterDuration / 1000;

      const intervalAnimation = () => {
        if (currentTime > duration) {
          if (backCircle.current !== null)
            backCircle.current.classList.add("main-color");
          if (outlineBack.current !== null)
            outlineBack.current.style.stroke = OUTLINE_ON_COLOR;
          if (plusContainer.current !== null)
            plusContainer.current.classList.remove("rotate-icon-forwards");
          clearInterval(intervalId);
          return;
        }
        currentTime += 0.01;
        const progress =
          outlineLength - (currentTime / duration) * outlineLength;
        outline.current.style.strokeDashoffset = progress;
      };

      intervalId = setInterval(intervalAnimation, 10);
    };

    animateOuterPart();
    setTimeout(animateInnerPart, animationOuterDuration);
  };

  const closeBtn = () => {
    // btnState = "closed";
    // disabling the button until the animation finish
    if (btn.current !== null) btn.current.disabled = true;

    const animateInnerPart = () => {
      // animate the inner circle
      if (innerCircle.current !== null)
        innerCircle.current.classList.remove("small-inner-circle");

      // remove open-to-close plus animation and add the new close-to-open animation
      switchClasses(
        plusHor.current,
        "animate-plus-hor-close-to-open",
        "animate-plus-hor-open-to-close"
      );
      switchClasses(
        plusVer.current,
        "animate-plus-ver-close-to-open",
        "animate-plus-ver-open-to-close"
      );
    };

    const animationOuterDuration = 500;
    let intervalId: any;
    const animateOuterPart = () => {
      if (plusContainer.current !== null)
        plusContainer.current.classList.add("rotate-icon-backwards");

      if (backCircle.current !== null)
        backCircle.current.classList.remove("main-color");
      if (backCircle.current !== null)
        outlineBack.current.style.stroke = OUTLINE_OFF_COLOR;

      let currentTime = 0;
      const duration = animationOuterDuration / 1000;

      const intervalAnimation = () => {
        if (currentTime > duration) {
          if (plusHor.current !== null)
            plusHor.current.className = "plus-hor secondary-color";
          if (plusVer.current !== null)
            plusVer.current.className = "plus-ver secondary-color";

          if (plusContainer.current !== null)
            plusContainer.current.classList.remove("rotate-icon-backwards");

          if (btn.current !== null) btn.current.disabled = false;
          clearInterval(intervalId);
          return;
        }
        currentTime += 0.01;
        const progress = (currentTime / duration) * outlineLength;
        outline.current.style.strokeDashoffset = progress;
      };

      intervalId = setInterval(intervalAnimation, 10);
    };

    animateInnerPart();
    setTimeout(animateOuterPart, animationOuterDuration);
  };

  useEffect(() => {
    if (opened) openBtn();
    else closeBtn();
  }, [opened]);

  return (
    <div className="absolute right-0 -top-1">
      <button onClick={onClick} ref={btn} className="btn-element" {...rest}>
        <div ref={backCircle} className="back">
          <div ref={innerCircle} className="inner"></div>
          <div className="outline-wrapper">
            <svg
              className="track-outline"
              width="453"
              height="453"
              viewBox="0 0 453 453"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                ref={outlineBack}
                cx="226.5"
                cy="226.5"
                r="216.5"
                stroke="#dadada"
                strokeWidth="10"
              />
            </svg>
            <svg
              className="moving-outline"
              width="453"
              height="453"
              viewBox="0 0 453 453"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                ref={outline}
                cx="226.5"
                cy="226.5"
                r="216.5"
                stroke="#6761c0"
                strokeWidth="10"
              />
            </svg>
          </div>
          <div ref={plusContainer} className="icon">
            <div ref={plusHor} className="plus-hor" />
            <div ref={plusVer} className="plus-ver" />
          </div>
        </div>
      </button>
    </div>
  );
}

export default AccordionItemButton;
