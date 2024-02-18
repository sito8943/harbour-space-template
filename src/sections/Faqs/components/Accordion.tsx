import { useCallback, useMemo, useState } from "react";
import { css } from "@emotion/css";

// components
import AccordionItem, { AccordionItemType } from "./AccordionItem";

// styles
import "./styles.css";

type AccordionPropType = {
  className?: string;
  defaultActive?: number;
  items: AccordionItemType[];
};

function Accordion(props: AccordionPropType) {
  const { className = "", items, defaultActive = -1 } = props;

  const [activeItem, setActiveItem] = useState(defaultActive);

  const toggleItem = useCallback(
    (question: string) =>
      setActiveItem(items.findIndex((item) => item.question === question)),
    [items]
  );

  const renderItems = useMemo(
    () =>
      items.map((item, i) => (
        <AccordionItem
          key={item.question}
          defaultOpened={i === defaultActive}
          onChange={toggleItem}
          {...item}
        />
      )),
    [items, defaultActive, toggleItem]
  );

  const gridRowsExpand = useMemo(
    () =>
      css({
        gridTemplateRows: `${items
          .map((_, index) => (index === activeItem ? "1fr" : "0fr"))
          .join(" ")}`,
      }),
    [activeItem, items]
  );

  return (
    <ul className={`accordion ${className} ${gridRowsExpand}`}>
      {renderItems}
      <hr />
    </ul>
  );
}

export default Accordion;
