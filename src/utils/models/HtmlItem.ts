export type HtmlParagraph = {
  type: "paragraph";
  data: string;
};

export type HtmlList = {
  type: "list";
  data: string[];
};

export type HtmlItem = HtmlParagraph | HtmlList;
