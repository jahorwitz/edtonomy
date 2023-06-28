import { render, screen } from "@testing-library/react";
import { Form } from "./form";
test("render test from component", () => {
  render(
    <Form data-testid="form-1">
      <Form.TextArea
        key="question-1"
        id="question-1"
        labelText="What were you trying to do?"
        placeholder="I was trying to create a new teaching event..."
      />
      <Form.TextArea
        key="question-2"
        id="question-2"
        labelText="What were you trying to do?"
        placeholder="I was trying to create a new teaching event..."
      />
      <Form.TextArea
        key="question-3"
        id="question-3"
        labelText="What were you trying to do?"
        placeholder="I was trying to create a new teaching event..."
      />
      <Form.TextArea
        key="question-4"
        id="question-4"
        labelText="Is this Ok?"
        placeholder="Yes It is "
      />
    </Form>
  );
  const formElement = screen.getByTestId("form-1");
  expect(formElement).toBeInTheDocument();
});
