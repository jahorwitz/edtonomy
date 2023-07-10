import { useEffect, useState } from "react";
import { closeIcon } from "../../assests/index";
import { PrimaryButton } from "../button";

export const WidgetContainer = ({ children }) => {
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
    <div className="absolute right-5 bottom-5">
      {!isOpen ? (
        <PrimaryButton
          onClick={handleButtonClick}
          className="px-4 pt-3 pb-4 font-['Mali']"
        >
          Support
        </PrimaryButton>
      ) : (
        <div className="bg-white shadow-slate-200 drop-shadow-md pl-6 pr-6 pt-8 pb-1 w-[411px] rounded-xl">
          <button className="absolute right-6 top-14">
            <img
              src={closeIcon}
              onClick={handleCloseClick}
              className="w-[14px] h-[14px]"
            />
          </button>
          {children}
          {showIntroModal && (
            <div className="absolute left-[-250px] top-[-150px]">
              <div className="w-[256px] rounded-xl bg-[#FF533D] pl-5 pr-5 pt-4 pb-4">
                <p className="text-xl font-light text-white font-['Mali']">
                  Hi! I'm Tori, your teaching assistant. Here to help you get
                  started with edTonomy
                </p>
              </div>
              <div className="bg-[#FF533D] rounded-full w-4 h-4 absolute bottom-[-15px] right-[-15px] drop-shadow-lg"></div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
