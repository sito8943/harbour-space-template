import { memo, useState } from "react";

// image
import minus from "assets/images/minus.svg";
import plus from "assets/images/plus.svg";

// types
import { Faq, renderArrayOfHtml } from "utils";

type AccordionItemPropType = Faq & {
  firstItem?: boolean;
  defaultOpened?: boolean;
  onChange?: (question: string) => void;
};

function AccordionItem(prop: AccordionItemPropType) {
  const { firstItem, defaultOpened, onChange, type, question, answer } = prop;

  const [active, setActive] = useState(defaultOpened);

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
          <h3>{type}</h3>
          <div className="item-content">
            <p className="mb-5">
              <b>{question}</b>
            </p>
            {renderArrayOfHtml(answer)}
          </div>
        </div>
      </li>
    </>
  );
}

const AccordionItemMemo = memo(
  (prop: AccordionItemPropType) => <AccordionItem {...prop} />,
  (oldProps, newProps) =>
    oldProps.type === newProps.type &&
    oldProps.question === newProps.question &&
    oldProps.answer === newProps.answer &&
    oldProps.firstItem === newProps.firstItem &&
    oldProps.defaultOpened === newProps.defaultOpened &&
    oldProps.onChange === newProps.onChange
);
AccordionItemMemo.displayName = "AccordionItem";

export default AccordionItemMemo;
