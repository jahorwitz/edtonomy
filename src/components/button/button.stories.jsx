import bugIcon from "../../images/bug.svg";
import checkIcon from "../../images/chevron-right.svg";
import emailIcon from "../../images/email.svg";
import playIcon from "../../images/play.svg";
import {
  Button,
  PrimaryButton,
  SecondaryOutlineButton,
  SecondarySelectedButton,
} from "./button";

export default {
  title: "Button",
  component: Button,
};
//email support button
export const EmailButton = ({ onClick }) => {
  return (
    <Button.WithIcon onClick={onClick} icon={emailIcon} text="Email support" />
  );
};
//one button for getting started view
export const GetStartedVideoButton = ({ onClick }) => {
  return (
    <Button.WithLink
      onClick={onClick}
      icon={playIcon}
      to=""
      textBold="Get started with EdTonomy"
      text="Watch our video tutorial"
    />
  );
};

export const GetStartedCheckListButton = ({ onClick }) => {
  return (
    <Button.WithLink
      onClick={onClick}
      icon={checkIcon}
      to=""
      textBold="Getting started checklist"
      text="8 easy steps to get you on board"
    />
  );
};

export const ReportBugButton = ({ onClick }) => {
  return (
    <Button.WithLink
      onClick={onClick}
      icon={bugIcon}
      to=""
      textBold="Report a bug"
      text=""
    />
  );
};

export const SendReportButton = ({ onClick }) => (
  <PrimaryButton onClick={onClick} text="Send report" />
);

export const YesOutlineButton = ({ onClick }) => (
  <SecondaryOutlineButton onClick={onClick} text="Yes" />
);

export const YesSelectedButton = ({ onClick }) => (
  <SecondarySelectedButton onClick={onClick} selected={true} text="Yes" />
);

export const YesNotSelectedButton = ({ onClick }) => (
  <SecondarySelectedButton onClick={onClick} selected={false} text="Yes" />
);
