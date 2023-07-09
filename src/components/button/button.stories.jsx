import bugIcon from "../../images/bug.svg";
import checkIcon from "../../images/chevron-right.svg";
import emailIcon from "../../images/email.svg";
import Good from "../../images/Emotion=Good.svg";
import playIcon from "../../images/play.svg";
import {
  Button,
  PrimaryButton,
  RadioButton,
  SecondaryOutlineButton,
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
  <PrimaryButton onClick={onClick}>Send report</PrimaryButton>
);

export const YesOutlineButton = ({ onClick }) => (
  <SecondaryOutlineButton onClick={onClick}>Yes</SecondaryOutlineButton>
);

export const RadioButtonUnselected = ({ onClick }) => (
  <RadioButton className="w-44" onClick={onClick} text="Yes" />
);

export const RadioButtonSelected = ({ onClick }) => (
  <RadioButton className="w-44" onClick={onClick} selected={true} text="Yes" />
);

export const RadioButtonWithIcon = ({ onClick }) => (
  <RadioButton onClick={onClick} icon={Good} text="Good" />
);
export const RadioButtonWithIconSelected = ({ onClick }) => (
  <RadioButton
    onClick={onClick}
    className="border-black"
    icon={Good}
    text="Good"
    selected
  />
);
