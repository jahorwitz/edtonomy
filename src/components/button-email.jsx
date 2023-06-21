import emailIcon from "../images/Email.svg";
import Button from "./button";

const EmailButton = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <Button.WithIcon icon={emailIcon} />
      <p>Email support</p>
    </Button>
  );
};

export default EmailButton;
