import { profile } from "../assets/index";
import { Button } from "../components";
import bugIcon from "../images/bug.svg";
import chatIcon from "../images/chat.svg";
import checkIcon from "../images/chevron-right.svg";
import emailIcon from "../images/email.svg";
import playIcon from "../images/play.svg";

export const Welcome = ({ goToNamedStep, onShowVideo }) => (
  <>
    <div className="flex justify-between items-center mb-[32px]">
      <div className="flex items-center gap-[16px]">
        <img src={profile} alt="widget-avatar" className="w-[52px] h-[52px]" />
        <h1 className="font-bold text-[28px] font-['Mali']">Welcome, Carlo!</h1>
      </div>
    </div>
    <ul className="list-none flex flex-col gap-5 mb-10">
      <Button.WithLink
        icon={playIcon}
        onClick={() => onShowVideo()}
        to=""
        textBold="Get started with EdTonomy"
        text="Watch our video tutorial"
      />
      <Button.WithLink
        icon={checkIcon}
        to=""
        textBold="Getting started checklist"
        text="8 easy steps to get you on board"
      />
      <Button.WithLink
        icon={bugIcon}
        to=""
        onClick={() => goToNamedStep("bug-report")}
        textBold="Report a bug"
      />
    </ul>
    <div className="grid grid-cols-2 gap-[12px] mb-8">
      <Button.WithIcon
        icon={chatIcon}
        onClick={() => goToNamedStep("chat")}
        text="Start a live chat"
      />
      <Button.WithIcon
        icon={emailIcon}
        text="Email support"
        href="mailto:your-email@edtonomy.com"
      />
    </div>
  </>
);
