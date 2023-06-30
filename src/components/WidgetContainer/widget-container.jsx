import { useEffect, useState } from "react";
import { closeIcon, profile } from "../../assests/index";
import { WidgetButton } from "../WidgetButton/widget-button";

const WidgetContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showIntroModal, setShowIntroModal] = useState(false);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    if (isOpen) {
      setTimer(
        setTimeout(() => {
          setShowIntroModal(true);
        }, 3000)
      );
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isOpen]);

  const handleButtonClick = () => {
    setIsOpen(true);
  };

  const handleCloseClick = () => {
    setIsOpen(false);
    clearTimeout(timer); // Clear the timer
  };
  return (
    <div className="">
      <WidgetButton handleClick={handleButtonClick} label="Support" />
      {isOpen && (
        <div className="bg-white shadow-slate-200 drop-shadow-md pl-[24px] pr-[24px] pt-[32px] w-[411px] rounded-[12px] absolute right-[20px] bottom-[20.42px]">
          <div className="flex justify-between items-center mb-[32px]">
            <div className="flex items-center gap-[16px]">
              <img
                src={profile}
                alt="widget-avatar"
                className="w-[52px] h-[52px]"
              />
              <h1 className="font-bold text-[28px]">Welcom, Carlo!</h1>
            </div>
            <button>
              <img
                src={closeIcon}
                onClick={handleCloseClick}
                className="w-[14px] h-[14px]"
              />
            </button>
          </div>
          <ul className="list-none flex flex-col gap-[20px] mb-[40px]">
            <li className="border-2 rounded-md pt-4 pb-4 pl-[16px]">
              GetStarted
            </li>
            <li className="border-2 rounded-md pt-4 pb-4 pl-[16px]">
              GetStarted
            </li>
            <li className="border-2 rounded-md pt-4 pb-4 pl-[16px]">
              GetStarted
            </li>
          </ul>
          <div className="flex gap-[12px] mb-[32px]">
            <button className="w-[176px] bg-slate-200 p-5 rounded-lg">
              Start a live chat
            </button>
            <button className="w-[176px] bg-slate-200 p-5 rounded-lg">
              Email Support
            </button>
          </div>
          {showIntroModal && (
            <div className="relative">
              <div className="absolute right-[382px] bottom-[455px] w-[256px] rounded-[24px] bg-[#FF533D] pl-[20px] pr-[21px] pt-[14px] pb-[16px]">
                <p className="text-[20px] font-light text-white">
                  Hi! I'm Tori, your teaching assistant. Here to help you get
                  started with edTonomy
                </p>
              </div>
              <div className=" bg-[#FF533D] rounded-full w-[16px] h-[16px] absolute right-[362px] bottom-[445px]"></div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default WidgetContainer;
