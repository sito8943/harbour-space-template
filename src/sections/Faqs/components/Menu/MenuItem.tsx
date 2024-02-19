import React from "react";

type MenuItemPropType = {
  text: string;
  onClick: (e: any) => void;
};

function MenuItem(props: MenuItemPropType) {
  const { text, onClick } = props;

  return (
    <li className="flex items-center justify-between gap-2 py-3 ">
      <button
        onClick={onClick}
        name={`${text.toLowerCase()}`}
        className="text-start w-full text-gray font-semibold text-lg"
        aria-label={`filter by ${text.toLowerCase()}`}
      >
        {text}
      </button>
    </li>
  );
}

export default MenuItem;
