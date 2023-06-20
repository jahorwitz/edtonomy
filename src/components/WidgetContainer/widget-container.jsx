import { useState } from "react";
import { closeIcon, profile } from "../../assests/index";
import WidgetButton from "../WidgetButton/widget-button";

const WidgetContainer = () => {
  const [isButtonClick, setIsButtonClick] = useState(false);

  const handleButtonClick = () => {
    setIsButtonClick(true);
  };
  return (
    <div className="">
      <WidgetButton handleClick={handleButtonClick} label="Support" />
      {isButtonClick && (
        <div className="bg-white drop-shadow-md pl-[24px] pr-[24px] pt-[32px] w-[411px] absolute right-[20px] bottom-[20.42px]">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-[16px]">
              <img src={profile} alt="widget-avatar" />
              <h1 className="font-bold text-[28px]">Welcom, Carlo</h1>
            </div>
            <button>
              <img src={closeIcon} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WidgetContainer;
