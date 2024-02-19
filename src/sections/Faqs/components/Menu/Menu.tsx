import { useMemo, useState } from "react";

// images
import chevronDown from "assets/images/chevron-down.svg";

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
          <li key={filter}>
            <button
              onClick={() => onChange(i)}
              name={`${filter.toLowerCase()}`}
              aria-label={`filter by ${filter.toLowerCase()}`}
            >
              {filter}
            </button>
          </li>
        )),
    [selected, items]
  );

  return (
    <div className="ipadPro:w-full">
      <button
        name="filter-menu"
        onClick={() => setOpened((opened) => !opened)}
        aria-label="click to open filter menu"
        className="flex items-center justify-between gap-2 border rounded-[100px] py-3 px-5 ipadPro:w-full"
      >
        <p className="text-primary font-semibold ipadPro:text-lg">
          {items[selected]}
        </p>
        <div className="w-[30px] h-[30px] flex items-center justify-center">
          <img
            className={`w-4 h-4 ipadPro:w-3 ipadPro:h-3 ${opened ? "rotate-180" : "rotate-0"}`}
            src={chevronDown}
            alt="Downward-pointing chevron icon"
          />
        </div>
      </button>
      <div className="hidden">{renderItems}</div>
    </div>
  );
}

export default Menu;
