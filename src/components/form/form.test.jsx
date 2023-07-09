import { render, screen } from "@testing-library/react";
import { Form } from "./form";
describe("Form Component", () =>
  test("form renders with textboxes and a submit button", () => {
    render(
      <Form data-testid="form">
        <Form.TextArea register={() => ({})} data-testId="textbox" />
        <button data-testId="submit-button"></button>
      </Form>
    );
    const formElement = screen.getByTestId("form");
    const textElement = screen.queryByTestId("textbox");
    const buttonElement = screen.queryByTestId("submit-button");
    expect(textElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
    expect(formElement).toBeInTheDocument();
  }));
