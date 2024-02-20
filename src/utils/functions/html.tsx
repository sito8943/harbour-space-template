import { Fragment } from "react";

// utils
import { HtmlItem } from "utils";

export const renderHtml = (objectElement: HtmlItem) => {
  const { type, data } = objectElement;
  switch (type) {
    default: // p
      return <p>{data}</p>;
  }
};

export const renderArrayOfHtml = (array: HtmlItem[]) => {
  return array.map((item, i) => (
    <Fragment key={i}>{renderHtml(item)}</Fragment>
  ));
};
