import { render, screen } from "@testing-library/react";
import EmailButton from "./button-email";

test("render button", () => {
  render(<EmailButton onClick={true} />);

  const element = screen.getByText(/email support/i);

  expect(element).toBeInTheDocument();
});
