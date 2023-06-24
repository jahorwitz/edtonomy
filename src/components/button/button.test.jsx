import { render, screen } from "@testing-library/react";
import emailIcon from "../../images/Email.svg";
import Button from "./button";

const EmailButton = ({ onClick }) => {
  return (
    <Button onClick={onClick} style="">
      <Button.WithIcon icon={emailIcon} />
      <p>Email support</p>
    </Button>
  );
};

test("render button", () => {
  render(<EmailButton onClick={true} />);

  const element = screen.getByText(/email support/i);

  expect(element).toBeInTheDocument();
});
