import { memo, useState } from "react";

// types
import { Faq, renderArrayOfHtml } from "utils";

// components
import AccordionItemButton from "./AccordionItemButton";

type AccordionItemPropType = Faq & {
  firstItem?: boolean;
  active: boolean;
  onChange?: (question: string) => void;
};

function AccordionItem(prop: AccordionItemPropType) {
  const { firstItem, active, onChange, type, question, answer } = prop;

  return (
    <>
      <li className="item">
        <hr className={firstItem ? "ipad:opacity-0 ipad:mt-0" : ""} />
        <div className="item-box">
          <AccordionItemButton
            opened={active}
            onClick={() => onChange && onChange(active ? "" : question)}
            name={`${active ? "reduce" : "expand"}`}
            aria-label={`click to ${active ? "reduce" : "expand"} ${question}`}
          />
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
  (oldProps, newProps) => {
    return (
      oldProps.active === newProps.active &&
      oldProps.type === newProps.type &&
      oldProps.question === newProps.question &&
      oldProps.answer === newProps.answer &&
      oldProps.firstItem === newProps.firstItem &&
      oldProps.onChange === newProps.onChange
    );
  }
);
AccordionItemMemo.displayName = "AccordionItem";

export default AccordionItemMemo;
