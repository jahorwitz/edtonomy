import emailIcon from "../../images/Email.svg";
import playIcon from "../../images/Play.svg";
import Button, {
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
    <Button onClick={onClick} style="border rounded-lg overflow-hidden">
      <Button.WithIcon icon={emailIcon} text="Email support" />
    </Button>
  );
};
//one button for getting started view
export const GetStartedVideoButton = ({ onClick }) => {
  return (
    <Button onClick={onClick} style="border border-black/30 rounded-lg p-4">
      <Button.WithLink
        icon={playIcon}
        to=""
        textBold="Get started with EdTonomy"
        text="Watch our video tutorial"
      />
    </Button>
  );
};

export const GetStartedCheckListButton = ({ onClick }) => {
  return (
    <Button onClick={onClick} style="border border-black/30 rounded-lg p-4">
      <Button.WithLink
        icon={playIcon}
        to=""
        textBold="Getting started checklist"
        text="8 easy steps to get you on board"
      />
    </Button>
  );
};

export const ReportBugButton = ({ onClick }) => {
  return (
    <Button onClick={onClick} style="border border-black/30 rounded-lg p-4">
      <Button.WithLink icon={playIcon} to="" textBold="Report a bug" text="" />
    </Button>
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
