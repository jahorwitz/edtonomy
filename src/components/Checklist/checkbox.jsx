import { useState } from "react";
import ChevronUnchecked from "../../images/chevron-right-black.svg";
import ChevronChecked from "../../images/chevron-right-gray.svg";

export const Checkbox = ({ label, url, article, backgroundColor }) => {
  const [isChecked, setIsChecked] = useState(false); //unchecked on initial value

  const style = { backgroundColor };
  return (
    <div className="min-h-0">
      <div
        className={
          "flex mb-2 h-full " +
          (isChecked ? "hover:bg-white" : "hover:bg-zinc-200")
        }
        style={style}
      >
        <input
          className="cursor-pointer checked:text-zinc-400 checked:ring-zinc-400 
        border-zinc-400 outline outline-5 outline-white disabled:border-zinc-400
        ring ring-5 ring-zinc-400 focus:ring-zinc-400 
        focus:outline-none rounded-full mx-2 my-1.5"
          type="checkbox"
          onChange={() => setIsChecked((prev) => !prev)}
        />
        <a
          className={
            "grow overflow-hidden whitespace-nowrap text-ellipsis " +
            (isChecked
              ? "line-through text-zinc-400 cursor-default"
              : "text-black cursor-help")
          }
          href={url || article}
        >
          {label}
        </a>
        <img
          src={isChecked ? ChevronChecked : ChevronUnchecked}
          alt="chevron-image"
        />
      </div>
    </div>
  );
};
