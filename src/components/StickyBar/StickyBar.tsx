// providers
import { useScholarship } from "providers";

// utils
import { parseDate } from "utils";

// styles
import "./styles.css";

function StickyBar() {
  const { scholarship } = useScholarship();

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
        <p>6 Day : 22 Hrs : 56 Min</p>
      </div>
    </footer>
  );
}

export default StickyBar;
