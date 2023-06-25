import emailIcon from "../../images/Email.svg";
import playIcon from "../../images/Play.svg";
import Button from "./button";

export default {
  title: "Button",
  component: Button,
};
//email support button
export const EmailButton = ({ onClick }) => {
  return (
    <Button onClick={onClick} style="border rounded-lg overflow-hidden">
      <div className="bg-black/5 px-9 py-1 flex flex-col items-center duration-300 hover:bg-black/10">
        <Button.WithIcon icon={emailIcon} />
        <p className="text-xs leading-extra-tight font-medium font-inter">
          Email support
        </p>
      </div>
    </Button>
  );
};
//one button for getting started view
export const ButtonWithLink = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      style="border border-black/30 rounded-lg flex p-4"
    >
      <div className="mr-11">
        <p className="text-edt-black text-xl font-medium font-inter">
          Get started with EdTonomy
        </p>
        <p className="text-base leading-extra-tight text-black/60 text-left font-inter">
          Watch our video tutorial
        </p>
      </div>
      <Button.WithLink icon={playIcon} to="" />
    </Button>
  );
};
//send report button for report a problem view
export const PrimaryButton = ({ onClick }) => {
  return (
    <Button onClick={onClick} style="border rounded-lg overflow-hidden">
      <div className="bg-edt-red px-32 py-4 duration-300 hover:bg-edt-dark-red">
        <p className="text-xl leading-extra-tight text-white font-medium font-inter">
          Send report
        </p>
      </div>
    </Button>
  );
};
//button for article view. changes outline on hover
export const SecondaryOutlineButton = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      style="border-2 border-edt-black rounded-lg overflow-hidden w-20 h-12 duration-300 hover:border-0 hover:bg-edt-red hover:text-white"
    >
      <p className="text-xl leading-extra-tight font-medium font-inter">Yes</p>
    </Button>
  );
};
//button for modal window "would you recommend EdTonomy to a friend? has selected properties"
export const SecondarySelectedButton = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      style="rounded-xl bg-black/5 w-44 h-[54px] focus:bg-white focus:border focus:border-edt-red"
    >
      <p className="text-base font-medium leading-extra-tight text-edt-black font-inter">
        Yes
      </p>
    </Button>
  );
};
