// components
import { Card } from "components";

// providers
import { useScholarship } from "providers";

// utils
import { parseDate } from "utils";

function GridCard() {
  const { scholarship } = useScholarship();

  return (
    <Card className="grid grid-cols-2 w-full gap-2 bg-white z-10">
      <div>
        <h3>Location</h3>
        <p className="card-content">{scholarship.location.name}</p>
      </div>
      <div>
        <h3>Duration</h3>
        <p className="card-content">
          {scholarship.duration} Year <br />
          Full-Time
        </p>
      </div>
      <div>
        <h3>Start date</h3>
        <p className="card-content">
          {parseDate(scholarship.scholarship_start_date)}
        </p>
      </div>
      <div>
        <h3>End date</h3>
        <p className="card-content">
          {parseDate(scholarship.application_end_date)}
        </p>
      </div>
    </Card>
  );
}

export default GridCard;
