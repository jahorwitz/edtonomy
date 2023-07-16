import { useState } from "react";
import ChevronUnchecked from "../../images/chevron-right-black.svg";
import ChevronChecked from "../../images/chevron-right-gray.svg";

export const Checklist = ({ children, className }) => {
  return (
    <div className={className}>
      <div className="flex flex-col mx-auto w-full max-w-md h-90 overflow-auto">
        {children}
      </div>
    </div>
  );
};

// Used to set Checkboxes in storybook
Checklist.Checkbox = ({ label, onClick, onChange, backgroundColor, color }) => {
  const [isChecked, setIsChecked] = useState(false); //unchecked on initial value

  return (
    <div className="min-h-0">
      <div
        className={
          "flex mb-2 h-full items-start " +
          (isChecked ? "hover:bg-white" : "hover:bg-zinc-200")
        }
        style={{ backgroundColor }}
      >
        <input
          className="cursor-pointer checked:text-zinc-400 checked:ring-zinc-400 
        border-zinc-400 outline outline-5 outline-white disabled:border-zinc-400
        ring ring-5 ring-zinc-400 focus:ring-zinc-400 
        focus:outline-none rounded-full mx-2 my-1.5"
          type="checkbox"
          onChange={() => {
            setIsChecked((prev) => !prev);
            if (onChange) {
              onChange(isChecked);
            }
          }}
        />
        <p
          className={
            "grow my-0.5 " +
            (isChecked
              ? "line-through text-zinc-400 cursor-default"
              : "text-black cursor-pointer")
          }
          onClick={onClick}
          style={{ color }}
        >
          {label}
        </p>
        <img
          src={isChecked ? ChevronChecked : ChevronUnchecked}
          alt="chevron-image"
        />
      </div>
    </div>
  );
};
