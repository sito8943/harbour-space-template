import { useMemo, useState } from "react";
import { css } from "@emotion/css";

// images
import chevronDown from "assets/images/chevron-down.svg";

// styles
import "./styles.css";
import MenuItem from "./MenuItem";

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
          <MenuItem
            key={filter}
            text={filter}
            onClick={() => {
              setOpened(false);
              onChange(i);
            }}
          />
        )),
    [selected, items]
  );

  const gridTemplateRowsCSS = useMemo(
    () => css({ gridTemplateRows: `35px ${opened ? "1fr" : "0fr"}` }),
    [opened]
  );

  return (
    <div
      className={`menu grid bg-white ${gridTemplateRowsCSS} border rounded-[40px] py-3 px-5 ipadPro:w-full `}
    >
      <button
        name="filter-menu"
        onClick={() => setOpened((opened) => !opened)}
        aria-label="click to open filter menu"
        className="flex items-center justify-between gap-2 ipadPro:w-full"
      >
        <p className="text-primary font-semibold text-lg">
          {selected === -1 ? "All" : items[selected]}
        </p>
        <div className="w-[30px] h-[30px] flex items-center justify-center">
          <img
            className={`w-4 h-4 ipadPro:w-3 ipadPro:h-3 ${opened ? "rotate-180" : "rotate-0"}`}
            src={chevronDown}
            alt="Downward-pointing chevron icon"
          />
        </div>
      </button>
      <div className="overflow-hidden">
        {selected !== -1 && (
          <MenuItem
            text="All"
            onClick={() => {
              setOpened(false);
              onChange(-1);
            }}
          />
        )}
        {renderItems}
      </div>
    </div>
  );
}

export default Menu;
