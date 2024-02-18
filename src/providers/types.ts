import { ReactNode } from "react";
import { Testimonial, OGMetaTag, HtmlMetaTag, Scholarship, Faq } from "utils/models";

export type ScholarshipRawData = {
  id: number;
  scope: string;
  slug: string;
  is_published: boolean;
  scholarship: Scholarship & { faqs: { items: Faq[]; categories: string[] } };
  meta: HtmlMetaTag;
  og_meta: OGMetaTag;
  testimonials: Testimonial[];
};

export type ScholarshipProviderProps = {
  children: ReactNode;
  data: ScholarshipRawData;
};

export type ScholarshipProviderData = {
  id: number;
  scholarship: Scholarship;
  faqs: Faq[];
  faqTypes: string[];
  testimonials: Testimonial[];
};
