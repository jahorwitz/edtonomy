import emailIcon from "../images/Email.svg";
import Button from "./button";

export default {
  title: "Button",
  component: Button,
};

export const EmailButton = ({ onClick }) => {
  return (
    <Button onClick={onClick} style="border rounded-lg overflow-hidden">
      <div className="bg-black/5 px-9 py-1 flex flex-col items-center duration-500 hover:bg-black/10">
        <Button.WithIcon icon={emailIcon} />
        <p className="text-xs leading-6 font-medium">Email support</p>
      </div>
    </Button>
  );
};

export const ButtonWithLink = () => {};

export const PrimaryButton = ({ onClick }) => {
  return (
    <Button onClick={onClick} style="border rounded-lg overflow-hidden">
      <div className="bg-edt-red px-32 py-4 duration-500 hover:bg-edt-dark-red">
        <p className="text-xl leading-6 text-white font-medium">Send report</p>
      </div>
    </Button>
  );
};

export const SecondaryOutlineButton = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      style="border-2 border-edt-black rounded-lg overflow-hidden w-20 h-12 duration-100 hover:border-0 hover:bg-edt-red hover:text-white"
    >
      <p className="text-xl leading-6 font-medium">Yes</p>
    </Button>
  );
};

export const SecondarySelectedButton = ({ onClick }) => {
  return <Button onClick={onClick}></Button>;
};
