import { HtmlItem } from "../HtmlItem";

export type Faq = {
  type: string;
  question: string;
  answer: HtmlItem[];
};
