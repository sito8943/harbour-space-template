// image
import { Fragment, memo, useState } from "react";
import minus from "../../../assets/images/minus.svg";
import plus from "../../../assets/images/plus.svg";

type HTMLItem = {
  type: "paragraph";
  data: string;
};

export type AccordionItemType = {
  header: string;
  question: string;
  answer: HTMLItem[];
};

type AccordionItemPropType = AccordionItemType & {
  firstItem?: boolean;
  defaultOpened?: boolean;
  onChange?: (question: string) => void;
};

function AccordionItem(prop: AccordionItemPropType) {
  const { firstItem, defaultOpened, onChange, header, question, answer } = prop;

  const [active, setActive] = useState(defaultOpened);

  const renderHtml = (objectElement: HTMLItem) => {
    const { type, data } = objectElement;
    switch (type) {
      default: // p
        return <p>{data}</p>;
    }
  };

  return (
    <>
      <li className="item">
        <hr className={firstItem ? "ipad:opacity-0 ipad:mt-0" : ""} />
        <div className="item-box">
          <button
            onClick={() => {
              setActive((active) => !active);
              onChange && onChange(active ? "" : question);
            }}
            name={`${active ? "reduce" : "expand"}`}
            aria-label={`click to ${active ? "reduce" : "expand"} ${question}`}
            className={active ? "reduce" : "expand"}
          >
            <img src={active ? minus : plus} alt="Minus symbol icon" />
          </button>
          <h3>{header}</h3>
          <div className="item-content">
            <p>
              <b>{question}</b>
            </p>
            {answer.map((answerItem, i) => (
              <Fragment key={i}>{renderHtml(answerItem)}</Fragment>
            ))}
          </div>
        </div>
      </li>
    </>
  );
}

const AccordionItemMemo = memo(
  (prop: AccordionItemPropType) => <AccordionItem {...prop} />,
  (oldProps, newProps) =>
    oldProps.header === newProps.header &&
    oldProps.question === newProps.question &&
    oldProps.answer === newProps.answer &&
    oldProps.firstItem === newProps.firstItem &&
    oldProps.defaultOpened === newProps.defaultOpened
);
AccordionItemMemo.displayName = "AccordionItem";

export default AccordionItemMemo;
