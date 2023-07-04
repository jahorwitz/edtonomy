import bugIcon from "../../images/bug.svg";
import checkIcon from "../../images/chevron-right.svg";
import emailIcon from "../../images/email.svg";
import Awful from "../../images/Emotion=Awful.svg";
import Good from "../../images/Emotion=Good.svg";
import Great from "../../images/Emotion=Great.svg";
import Okay from "../../images/Emotion=Okay.svg";
import Soso from "../../images/Emotion=So-so.svg";
import playIcon from "../../images/play.svg";
import {
  Button,
  PrimaryButton,
  RadioButton,
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

export const RadioButtonUnselected = ({ onClick }) => (
  <RadioButton onClick={onClick} icon={Good} text="Good" />
);
export const RadioButtonSelected = ({ onClick }) => (
  <RadioButton onClick={onClick} style="border-black" icon={Good} text="Good" />
);

export const RadioButtonGroup = ({}) => {
  return (
    <ul>
      <li>
        <RadioButton icon={Great} />
      </li>
      <li>
        <RadioButton icon={Good} />
      </li>
      <li>
        <RadioButton icon={Okay} />
      </li>
      <li>
        <RadioButton icon={Soso} />
      </li>
      <li>
        <RadioButton icon={Awful} />
      </li>
    </ul>
  );
};

export const RadioButtonGroupSelected = ({}) => {
  return (
    <ul>
      <li>
        <RadioButton icon={Great} />
      </li>
      <li>
        <RadioButton icon={Good} />
      </li>
      <li>
        <RadioButton icon={Okay} style="border-black" />
      </li>
      <li>
        <RadioButton icon={Soso} />
      </li>
      <li>
        <RadioButton icon={Awful} />
      </li>
    </ul>
  );
};
