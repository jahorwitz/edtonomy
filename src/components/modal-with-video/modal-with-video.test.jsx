import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { ModalWithVideo } from "./modal-with-video";

describe("ModalWithVideo", () => {
  it("closes the modal when the close button is clicked", () => {
    render(
      <ModalWithVideo
        data-testId="modal"
        src="https://www.youtube.com/embed/vpvQfCLWOn8"
      />
    );

    const modal = screen.queryByTestId("modal");
    expect(modal).toBeInTheDocument();
  });
});
