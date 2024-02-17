import { useMemo, useState } from "react";

// images
import chevronDown from "../../assets/images/chevron-down.svg";

const filters = ["Program conditions"];

function Testimonials() {
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
    <section id="faqs" className="section w-full flex">
      <div className="w-full flex items-center justify-between">
        <h2>
          Frequently asked <br /> questions
        </h2>
        <div className="flex items-center gap-10">
          <p>Filter by:</p>
          <div>
            <div className="flex items-center justify-center gap-2 border rounded-[100px] py-3 px-5">
              <p className="text-primary font-semibold">{filters[filterBy]}</p>
              <div className="w-[30px] h-[30px] flex items-center justify-center">
                <img className="w-4 h-4" src={chevronDown} alt="" />
              </div>
            </div>
            <div className="hidden">{renderFilters}</div>
          </div>
        </div>
      </div>
      <hr />
    </section>
  );
}

export default Testimonials;
