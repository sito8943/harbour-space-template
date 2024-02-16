// styles
import "./styles.css";

type CardPropType = {
  className?: string;
  header?: string;
  children: React.ReactNode;
};

function Card(props: CardPropType) {
  const { className = "", header, children } = props;

  return (
    <div className={`card ${className}`}>
      {header && <h3 className="card-header">{header}</h3>}
      {children}
    </div>
  );
}

export default Card;
