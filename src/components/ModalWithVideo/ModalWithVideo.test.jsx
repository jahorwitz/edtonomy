import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import ModalWithVideo from "./ModalWithVideo";
import OpenModalButton from "./OpenModalButton";

describe("ModalWithVideo", () => {
  it("opens the modal when the watch video button is clicked", () => {
    render(
      <>
        <OpenModalButton />
        <div data-testId="modal-with-video">
          <div className="relative"></div>
        </div>
      </>
    );

    fireEvent.click(screen.getByText("Watch Video"));
    expect(screen.getByTestId("modal-with-video")).toBeInTheDocument();
  });

  it("closes the modal when the close button is clicked", () => {
    const { getByAltText, queryByTestId } = render(
      <ModalWithVideo data-testId="modal-with-video" />
    );

    const closeButton = getByAltText("close-button");
    fireEvent.click(closeButton);

    const modal = queryByTestId("modal-with-video");
    expect(modal).toBeNull();
  });
});
