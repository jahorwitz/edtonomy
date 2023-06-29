import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import ModalWithVideo from "./ModalWithVideo";
import OpenModalButton from "./OpenModalButton";

describe("ModalWithVideo", () => {
  it("opens the modal when the watch video button is clicked", () => {
    render(
      <>
        <OpenModalButton />
        <div data-testId="modal">
          <div classname="iframe"></div>
        </div>
      </>
    );

    const openModalButton = screen.getByText("Watch Video");
    fireEvent.click(openModalButton);
    expect(screen.getByTestId("modal")).toBeInTheDocument();
  });

  it("closes the modal when the close button is clicked", () => {
    render(<ModalWithVideo data-testId="modal" />);

    const closeButton = screen.getByAltText("close-button");
    fireEvent.click(closeButton);

    const modal = screen.queryByTestId("modal");
    expect(modal).toBeNull();
  });

  it("closes the modal if the escape key is pressed and the video player has not been clicked", () => {
    render(<ModalWithVideo data-testId="modal" />);
    const modal = screen.queryByTestId("modal");
    fireEvent.keyDown(document, { key: "Escape" });
    expect(modal).toBeNull();
  });

  it("closes the modal when the overlay is clicked", () => {
    render(<ModalWithVideo data-testId="modal" />);
    const overlay = screen.queryByTitle("video-modal");
    fireEvent.click(overlay);

    const modal = screen.queryByTestId("modal");
    expect(modal).toBeNull();
  });
});
