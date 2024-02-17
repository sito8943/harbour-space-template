import { useMemo, useState } from "react";

// images
import chevronDown from "../../assets/images/chevron-down.svg";

// components
import Accordion, { AccordionItem } from "./components/Accordion";

const filters = ["Program conditions"];
const faqs: AccordionItem[] = [
  {
    header: "Program conditions",
    question: "What are my obligations?",
    answer: [
      {
        type: "paragraph",
        data: "We will compile your results to present to the University’s Board of Admissions and the company. If your profile is selected, you will be informed about the next steps via email.",
      },
      {
        type: "paragraph",
        data: "Classes are scheduled for three hours a day, five days a week, for a total of 48 contact hours including examinations, which means that studying requires active participation and maximum concentration.",
      },
      {
        type: "paragraph",
        data: "Lectures are held every day either in the morning or in the afternoon, and the final candidate is expected to spend 4-6 hours a day on their internship.",
      },
      {
        type: "paragraph",
        data: "Please be aware that you will have to coordinate your weekly schedule with the company and University.",
      },
    ],
  },
  {
    header: "Program conditions",
    question: "What are my obligations? 1",
    answer: [
      {
        type: "paragraph",
        data: "After your interview with the Admissions Office, you will be notified about whether you’re moving to the next stage of the application process within the next 10 calendar days. If there are any changes in the timeline, you will be informed by your Admissions Officer.",
      },
    ],
  },
];

function Faqs() {
  const [filterBy, setFilterBy] = useState<number>(0);

  const renderFilters = useMemo(
    () =>
      filters
        .filter((_, i) => i !== filterBy)
        .map((filter, i) => (
          <li key={filter}>
            <button
              onClick={() => setFilterBy(i)}
              name={`${filter.toLowerCase()}`}
              aria-label={`filter by ${filter.toLowerCase()}`}
            >
              {filter}
            </button>
          </li>
        )),
    [filterBy]
  );

  return (
    <section id="faqs" className="section w-full flex flex-col mb-20 ipadPro:mb-40 mobile:px-7">
      <div className="mb-10 ipad:mb-0 w-full flex items-center justify-between ipadPro:flex-col ipadPro:items-start ipadPro:justify-start ipadPro:gap-10">
        <h2>
          Frequently asked <br /> questions
        </h2>
        <div className="flex items-center gap-10 ipadPro:w-full mobile:gap-2 mobile:items-start mobile:flex-col">
          <p>Filter by:</p>
          <div className="ipadPro:flex-1">
            <div className="flex items-center justify-between gap-2 border rounded-[100px] py-3 px-5">
              <p className="text-primary font-semibold ipadPro:text-lg">
                {filters[filterBy]}
              </p>
              <div className="w-[30px] h-[30px] flex items-center justify-center">
                <img
                  className="w-4 h-4 ipadPro:w-3 ipadPro:h-3"
                  src={chevronDown}
                  alt="Downward-pointing chevron icon"
                />
              </div>
            </div>
            <div className="hidden">{renderFilters}</div>
          </div>
        </div>
      </div>
      <Accordion items={faqs} />
    </section>
  );
}

export default Faqs;
