import { fireEvent, render } from "@testing-library/react";
import Questionnaire from "./questionnaire";

test('handles "Yes" button click', () => {
  const { getByText, queryByText } = render(<Questionnaire />);

  const yesButton = getByText("Yes");
  fireEvent.click(yesButton);

  const questionTitle = queryByText("Was this article helpful?");
  const yesMessage = queryByText("We're glad it was useful");

  expect(questionTitle).toBeNull(); // The question title should be hidden
  expect(yesMessage).toBeInTheDocument(); // The "We're glad it was useful" message should be displayed
});

test('handles "No" button click', () => {
  const { getByText, getByPlaceholderText } = render(<Questionnaire />);

  const noButton = getByText("No");
  fireEvent.click(noButton);

  const questionTitle = getByText("What was unclear?");
  const feedbackInput = getByPlaceholderText("Tell us");
  const submitButton = getByText("Submit");

  expect(questionTitle).toBeInTheDocument(); // The new question title should be displayed
  expect(feedbackInput).toBeInTheDocument(); // The feedback input should be displayed
  expect(submitButton).toBeInTheDocument(); // The submit button should be displayed
});
