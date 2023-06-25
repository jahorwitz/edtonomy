import { render, screen } from "@testing-library/react";
import emailIcon from "../../images/Email.svg";
import Button from "./button";

//Create a sample component with Button
const EmailButton = ({ onClick }) => {
  return (
    <Button onClick={onClick} style="">
      <Button.WithIcon icon={emailIcon} />
      <p>Email support</p>
    </Button>
  );
};
//Render sample component and check for text
test("render button", () => {
  render(<EmailButton onClick={true} />);

  const element = screen.getByText(/email support/i);

  expect(element).toBeInTheDocument();
});
