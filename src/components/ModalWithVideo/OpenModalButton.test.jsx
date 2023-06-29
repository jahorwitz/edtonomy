import { render } from "@testing-library/react";
import OpenModalButton from "./OpenModalButton";

it("renders the watch button", () => {
  const { getByText } = render(<OpenModalButton data-testid="video-modal" />);
  const watchButton = getByText("Watch Video");
  expect(watchButton).toBeInTheDocument();
});
