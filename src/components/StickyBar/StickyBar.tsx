import { useEffect, useMemo, useState } from "react";

// providers
import { useScholarship } from "providers";

// utils
import { parseDate } from "utils";

// components
import { Countdown } from "components";

// styles
import "./styles.css";

function StickyBar() {
  const { scholarship } = useScholarship();

  const difference = useMemo(
    () =>
      new Date(scholarship.scholarship_start_date).getTime() -
      new Date(scholarship.application_end_date).getTime(),
    [scholarship]
  );

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
        <Countdown start={difference} />
      </div>
    </footer>
  );
}

export default StickyBar;
