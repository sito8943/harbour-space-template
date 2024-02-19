import { useMemo, useState } from "react";
import { css } from "@emotion/css";

// images
import chevronDown from "assets/images/chevron-down.svg";

// styles
import "./styles.css";

type MenuPropType = {
  items: string[];
  selected: number;
  onChange: (active: number) => void;
};

function Menu(props: MenuPropType) {
  const { items, selected, onChange } = props;

  const [opened, setOpened] = useState(false);

  const renderItems = useMemo(
    () =>
      items
        .filter((_, i) => i !== selected)
        .map((filter, i) => (
          <li
            key={filter}
            className="flex items-center justify-between gap-2 py-3 "
          >
            <button
              onClick={() => {
                setOpened(false);
                onChange(i);
              }}
              name={`${filter.toLowerCase()}`}
              className={`text-gray font-semibold text-lg ${i === 0 ? "mt-2" : ""}`}
              aria-label={`filter by ${filter.toLowerCase()}`}
            >
              {filter}
            </button>
          </li>
        )),
    [selected, items]
  );

  const gridTemplateRowsCSS = useMemo(
    () => css({ gridTemplateRows: `35px ${opened ? "1fr" : "0fr"}` }),
    [opened]
  );

  return (
    <div
      className={`menu ipadPro:w-full grid relative ${gridTemplateRowsCSS} border ${opened ? "rounded-[40px]" : "rounded-[100px]"} py-3 px-5`}
    >
      <button
        name="filter-menu"
        onClick={() => setOpened((opened) => !opened)}
        aria-label="click to open filter menu"
        className="flex items-center justify-between gap-2 ipadPro:w-full"
      >
        <p className="text-primary font-semibold text-lg">{items[selected]}</p>
        <div className="w-[30px] h-[30px] flex items-center justify-center">
          <img
            className={`w-4 h-4 ipadPro:w-3 ipadPro:h-3 ${opened ? "rotate-180" : "rotate-0"}`}
            src={chevronDown}
            alt="Downward-pointing chevron icon"
          />
        </div>
      </button>
      <div className="overflow-hidden">{renderItems}</div>
    </div>
  );
}

export default Menu;
