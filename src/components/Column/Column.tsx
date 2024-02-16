// styles
import "./styles.css";

type ColumnPropType = {
  children: React.ReactNode;
};

function Column(props: ColumnPropType) {
  const { children } = props;

  return <div className="start-column">{children}</div>;
}

export default Column;
