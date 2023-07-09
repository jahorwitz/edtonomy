import { useEffect, useState } from "react";
import StepWizard from "react-step-wizard";
import { profile } from "../../assests/index";
import bugIcon from "../../images/bug.svg";
import checkIcon from "../../images/chevron-right.svg";
import emailIcon from "../../images/email.svg";
import playIcon from "../../images/play.svg";
import { Button, PrimaryButton } from "../button/button";
import { ReportBugView } from "../widget-routing/report-bug-view";

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

  const handleOpenWidgetClick = () => {
    setIsOpen(true);
  };

  const handleCloseClick = () => {
    setIsOpen(false);
    clearTimeout(timer); // Clear the timer
  };

  const MainView = () => {
    return (
      <div className="bg-white shadow-slate-200 drop-shadow-md pl-[24px] pr-[24px] pt-[32px] w-[411px] rounded-[12px] absolute right-[20px] bottom-[20.42px]">
        <div className="flex justify-between items-center mb-[32px]">
          <div className="flex items-center gap-[16px]">
            <img
              src={profile}
              alt="widget-avatar"
              className="w-[52px] h-[52px]"
            />
            <h1 className="font-bold text-[28px]">Welcome, Carlo!</h1>
          </div>
          <Button
            onClick={handleCloseClick}
            className="w-3.5 h-3.5 bg-close-icon bg-center bg-no-repeat"
          />
        </div>
        <ul className="list-none flex flex-col gap-[20px] mb-[40px]">
          <li>
            <Button.WithLink
              icon={playIcon}
              textBold={"Get started with EdTonomy"}
              text={"Watch our video tutorial"}
            />
          </li>
          <li>
            <Button.WithLink
              icon={checkIcon}
              to={"article"}
              textBold={"Getting started checklist"}
              text={"8 easy steps to get you on board"}
            />
          </li>
          <li>
            <Button.WithLink
              icon={bugIcon}
              to={"bug"}
              textBold={"Report a bug"}
            />
          </li>
        </ul>
        <div className="flex gap-[12px] mb-[32px]">
          <Button.WithIcon text={"Start a live chat"} />
          <Button.WithIcon icon={emailIcon} text={"Email support"} />
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
    );
  };

  return (
    <StepWizard>
      <PrimaryButton
        onClick={handleOpenWidgetClick}
        text="Support"
        className={
          "absolute bottom-[36.42px] right-10 rounded-2xl pt-3 pb-4 px-4 text-base leading-4 font-bold"
        }
        to={"main"}
      />
      <MainView stepName={"main"} />
      <ReportBugView stepName={"bug"} />
    </StepWizard>
  );
};

export default WidgetContainer;
