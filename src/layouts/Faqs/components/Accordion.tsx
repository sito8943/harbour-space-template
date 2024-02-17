import { Fragment, useMemo, useState } from "react";
import { css } from "@emotion/css";

// image
import minus from "../../../assets/images/minus.svg";
import plus from "../../../assets/images/plus.svg";

// styles
import "./styles.css";

type HTMLItem = {
  type: "paragraph";
  data: string;
};

export type AccordionItem = {
  header: string;
  question: string;
  answer: HTMLItem[];
};

type AccordionPropType = {
  className?: string;
  defaultActive?: number;
  items: AccordionItem[];
};

const renderHtml = (objectElement: HTMLItem) => {
  const { type, data } = objectElement;
  switch (type) {
    default: // p
      return <p>{data}</p>;
  }
};

function Accordion(props: AccordionPropType) {
  const { className = "", items, defaultActive = 0 } = props;

  const [activeItem, setActiveItem] = useState<number>(defaultActive);

  const renderItems = useMemo(
    () =>
      items.map((item, i) => (
        <Fragment key={item.question}>
          <li className="item">
            <hr />
            <div className="item-box">
              <button
                onClick={() => setActiveItem(i)}
                name={`${activeItem === i ? "reduce" : "expand"}`}
                aria-label={`click to ${
                  activeItem === i ? "reduce" : "expand"
                } ${item.question}`}
                className={activeItem === i ? "reduce" : "expand"}
              >
                <img
                  src={activeItem === i ? minus : plus}
                  alt="Minus symbol icon"
                />
              </button>
              <h3>{item.header}</h3>
              <div className="item-content">
                <p>
                  <b>{item.question}</b>
                </p>
                {item.answer.map((answerItem, i) => (
                  <Fragment key={i}>{renderHtml(answerItem)}</Fragment>
                ))}
              </div>
            </div>
          </li>
        </Fragment>
      )),
    [items, activeItem]
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
