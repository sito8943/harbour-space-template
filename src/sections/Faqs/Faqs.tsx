import { useMemo, useState } from "react";

// images
import chevronDown from "assets/images/chevron-down.svg";

// components
import { Accordion } from "./components";

// providers
import { useScholarship } from "providers";

function Faqs() {
  const { faqs, faqTypes } = useScholarship();

  const [filterBy, setFilterBy] = useState<number>(0);

  const renderFaqTypes = useMemo(
    () =>
      faqTypes
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

  const filteredFaqs = useMemo(
    () => faqs.filter((faq) => faq.type === faqTypes[filterBy]),
    [filterBy, faqs]
  );

  return (
    <section
      id="faqs"
      className="section w-full flex flex-col mb-20 ipadPro:mb-0 mobile:px-7"
    >
      <div className="mb-10 ipad:mb-0 w-full flex items-center justify-between ipadPro:flex-col ipadPro:items-start ipadPro:justify-start ipadPro:gap-10">
        <h2>
          Frequently asked <br /> questions
        </h2>
        <div className="flex items-center gap-10 ipadPro:w-full ipad:flex-col ipad:items-start mobile:gap-2 ">
          <p className="w-[100px]">Filter by:</p>
          <div className="ipadPro:w-full">
            <button
              name="filter-menu"
              aria-label="click to open filter menu"
              className="flex items-center justify-between gap-2 border rounded-[100px] py-3 px-5 ipadPro:w-full"
            >
              <p className="text-primary font-semibold ipadPro:text-lg">
                {faqTypes[filterBy]}
              </p>
              <div className="w-[30px] h-[30px] flex items-center justify-center">
                <img
                  className="w-4 h-4 ipadPro:w-3 ipadPro:h-3"
                  src={chevronDown}
                  alt="Downward-pointing chevron icon"
                />
              </div>
            </button>
            <div className="hidden">{renderFaqTypes}</div>
          </div>
        </div>
      </div>
      <Accordion items={filteredFaqs} />
    </section>
  );
}

export default Faqs;
