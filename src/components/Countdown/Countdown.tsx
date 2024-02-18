import { useEffect, useState } from "react";

// utils
import { countdown } from "utils";

type CountdownPropType = {
  start: number;
};

function Countdown(props: CountdownPropType) {
  const { start } = props;

  const [timeLeft, setTimeLeft] = useState(countdown(start));

  useEffect(() => {
    if (
      timeLeft.days <= 0 &&
      timeLeft.hours <= 0 &&
      timeLeft.minutes <= 0 &&
      timeLeft.seconds <= 0
    ) {
      // Update the countdown every second
      const timer = setTimeout(() => {
        setTimeLeft(countdown(start - new Date().getTime()));
      }, 1000);

      // Clear the timer when the component unmounts or the end date is reached
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  // Format the time left for display
  const formatTime = (time: number) => (time < 10 ? `0${time}` : time);

  return (
    <p>
      {`${timeLeft.days} Day : ${formatTime(timeLeft.hours)} Hrs : ${formatTime(timeLeft.minutes)} Min : ${formatTime(timeLeft.seconds)} Seg`}
    </p>
  );
}

export default Countdown;
