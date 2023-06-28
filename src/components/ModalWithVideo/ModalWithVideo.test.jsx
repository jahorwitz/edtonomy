import { fireEvent, render } from "@testing-library/react";
import ModalWithVideo from "./ModalWithVideo";

describe("ModalWithVideo", () => {
  it("renders the watch video button", () => {
    const { getByText } = render(<ModalWithVideo />);
    const watchVideoButton = getByText("Watch Video");
    expect(watchVideoButton).toBeInTheDocument();
  });

  it("opens the modal when the watch video button is clicked", () => {
    const { getByText, getByTestId } = render(<ModalWithVideo />);
    const watchVideoButton = getByText("Watch Video");
    fireEvent.click(watchVideoButton);
    const modal = getByTestId("video-modal");
    expect(modal).toBeInTheDocument();
  });

  it("closes the modal when the close button is clicked", () => {
    const { getByText, getByTestId, queryByTestId } = render(
      <ModalWithVideo />
    );
    const watchVideoButton = getByText("Watch Video");
    fireEvent.click(watchVideoButton);
    const closeButton = getByTestId("close-button");
    fireEvent.click(closeButton);
    const modal = queryByTestId("modal");
    expect(modal).toBeNull();
  });
});
