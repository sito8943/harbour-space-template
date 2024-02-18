import { useEffect, useMemo, useState } from "react";

// providers
import { useScholarship } from "providers";

// utils
import { parseDate } from "utils";

// styles
import "./styles.css";
import { countdown } from "utils/functions/date";

function StickyBar() {
  const { scholarship } = useScholarship();

  const difference = useMemo(
    () =>
      new Date(scholarship.scholarship_start_date).getTime() -
      new Date(scholarship.application_end_date).getTime(),
    [scholarship]
  );

  const [timeLeft, setTimeLeft] = useState(countdown(difference));

  useEffect(() => {
    if (
      timeLeft.days <= 0 &&
      timeLeft.hours <= 0 &&
      timeLeft.minutes <= 0 &&
      timeLeft.seconds <= 0
    ) {
      // Update the countdown every second
      const timer = setTimeout(() => {
        setTimeLeft(countdown(difference - new Date().getTime()));
      }, 1000);

      // Clear the timer when the component unmounts or the end date is reached
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  // Format the time left for display
  const formatTime = (time: number) => (time < 10 ? `0${time}` : time);

  return (
    <footer className="sticky-bar">
      <div>
        <h4>Zeptolab</h4>
        <p>Marketing Performance</p>
      </div>
      <div>
        <h4>Location</h4>
        <p>{scholarship.location.name}</p>
      </div>
      <div>
        <h4>Duration</h4>
        <p>{scholarship.duration} Year Full-Time</p>
      </div>
      <div>
        <h4>Start date</h4>
        <p>{parseDate(scholarship.scholarship_start_date)}</p>
      </div>
      <div>
        <h4>Application deadline</h4>
        <p>{parseDate(scholarship.application_end_date)}</p>
      </div>
      <div>
        <h4>Application closes in</h4>
        <p>
          {`${timeLeft.days} Day : ${formatTime(timeLeft.hours)} Hrs : ${formatTime(timeLeft.minutes)} Min : ${formatTime(timeLeft.seconds)} Seg`}
        </p>
      </div>
    </footer>
  );
}

export default StickyBar;
