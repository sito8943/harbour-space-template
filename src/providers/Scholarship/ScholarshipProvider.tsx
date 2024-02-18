import { createContext, useContext, useEffect } from "react";

// functions
import { addMeta, removeMeta } from "utils";

// types
import { ScholarshipProviderData, ScholarshipProviderProps } from "./types";

const ScholarshipContext = createContext({} as ScholarshipProviderData);

const ScholarshipProvider = (props: ScholarshipProviderProps) => {
  const { data } = props;
  const { meta, og_meta } = data;
  const { id, testimonials, scholarship } = data;
  const { items, categories } = scholarship.faqs;

  useEffect(() => {
    Object.keys(meta).forEach((key: string) => {
      if (key !== "id") addMeta(key, meta[key]);
    });
    return () => {
      Object.keys(meta).forEach((key: string) => {
        if (key !== "id") removeMeta(key);
      });
    };
  }, [meta]);

  useEffect(() => {
    Object.keys(og_meta).forEach((key: string) => {
      if (key !== "id") addMeta(key, og_meta[key]);
    });
    return () => {
      Object.keys(og_meta).forEach((key: string) => {
        if (key !== "id") removeMeta(key);
      });
    };
  }, [og_meta]);

  return (
    <ScholarshipContext.Provider
      value={{
        id,
        scholarship,
        testimonials,
        faqs: items,
        faqTypes: categories,
      }}
    ></ScholarshipContext.Provider>
  );
};

const useScholarship = (): ScholarshipProviderData => {
  const context = useContext(ScholarshipContext);
  if (!context)
    throw new Error("scholarshipContext must be used within a Provider");
  return context;
};

export { ScholarshipProvider, useScholarship };
