// styles
import "./styles.css";

type ColumnPropType = {
  children: React.ReactNode;
  className?: string;
};

function Column(props: ColumnPropType) {
  const { children, className = "" } = props;

  return <div className={`start-column ${className}`}>{children}</div>;
}

export default Column;
