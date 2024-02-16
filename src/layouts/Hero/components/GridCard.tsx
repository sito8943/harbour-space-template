import Card from "../../../components/Card/Card";

function GridCard() {
  return (
    <Card className="grid grid-cols-2 w-full gap-2">
      <div>
        <h3>Location</h3>
        <p className="card-content">Bangkok</p>
      </div>
      <div>
        <h3>Duration</h3>
        <p className="card-content">
          1 Year <br />
          Full-Time
        </p>
      </div>
      <div>
        <h3>Start date</h3>
        <p className="card-content">30 June 2020</p>
      </div>
      <div>
        <h3>End date</h3>
        <p className="card-content">3 Aug 2020</p>
      </div>
    </Card>
  );
}

export default GridCard;
