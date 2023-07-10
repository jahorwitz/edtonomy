import { profile } from "../../assests/index";
import bugIcon from "../../images/bug.svg";
import chatIcon from "../../images/chat.svg";
import checkIcon from "../../images/chevron-right.svg";
import emailIcon from "../../images/email.svg";
import playIcon from "../../images/play.svg";
import { Button } from "../button";
import { WidgetContainer } from "./widget-container";

export default {
  title: "WidgetContainer",
  component: WidgetContainer,
};

export const Support = () => (
  <WidgetContainer>
    <div className="flex justify-between items-center mb-[32px]">
      <div className="flex items-center gap-[16px]">
        <img src={profile} alt="widget-avatar" className="w-[52px] h-[52px]" />
        <h1 className="font-bold text-[28px] font-['Mali']">Welcome, Carlo!</h1>
      </div>
    </div>
    <ul className="list-none flex flex-col gap-5 mb-10">
      <Button.WithLink
        icon={playIcon}
        text="Watch our video tutorial"
        textBold="Get started with EdTonomy"
        to=""
      />
      <Button.WithLink
        icon={checkIcon}
        to=""
        textBold="Getting started checklist"
        text="8 easy steps to get you on board"
      />
      <Button.WithLink icon={bugIcon} to="" textBold="Report a bug" />
    </ul>
    <div className="grid grid-cols-2 gap-[12px] mb-8">
      <Button.WithIcon icon={chatIcon} text="Start a live chat" />
      <Button.WithIcon icon={emailIcon} text="Email support" />
    </div>
  </WidgetContainer>
);
