import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import playIcon from "../../images/play.svg";
import { Button } from "../button";
import { ModalWithVideo } from "./modal-with-video";

describe("ModalWithVideo", () => {
  it("closes the modal when the close button is clicked", () => {
    render(
      <ModalWithVideo
        data-testId="modal"
        OpenButton={Button.WithLink}
        openButtonProps={{
          icon: playIcon,
          to: "",
          textBold: "Get started with EdTonomy",
          text: "Watch our video tutorial",
        }}
      />
    );

    // Modal is closed initially
    const modal = screen.queryByTestId("modal");
    expect(modal).toHaveClass("hidden");

    // Open modal by clicking the open button
    const openButton = screen.getByText("Watch our video tutorial");
    fireEvent.click(openButton);
    expect(modal).not.toHaveClass("hidden");

    // Close modal by clicking close button
    const closeButton = screen.getByAltText("close-button");
    fireEvent.click(closeButton);

    expect(modal).toHaveClass("hidden");
  });

  it("closes the modal if the escape key is pressed and the video player has not been clicked", () => {
    render(
      <ModalWithVideo
        data-testId="modal"
        OpenButton={Button.WithLink}
        openButtonProps={{
          icon: playIcon,
          to: "",
          textBold: "Get started with EdTonomy",
          text: "Watch our video tutorial",
        }}
      />
    );
    // Modal is closed initially
    const modal = screen.queryByTestId("modal");
    expect(modal).toHaveClass("hidden");

    // Open modal by clicking the open button
    const openButton = screen.getByText("Watch our video tutorial");
    fireEvent.click(openButton);
    expect(modal).not.toHaveClass("hidden");

    // Close modal by pressing ESC
    fireEvent.keyDown(document, { key: "Escape" });

    expect(modal).toHaveClass("hidden");
  });

  it("closes the modal when the overlay is clicked", () => {
    render(
      <ModalWithVideo
        data-testId="modal"
        OpenButton={Button.WithLink}
        openButtonProps={{
          icon: playIcon,
          to: "",
          textBold: "Get started with EdTonomy",
          text: "Watch our video tutorial",
        }}
      />
    );

    // Modal is closed initially
    const modal = screen.queryByTestId("modal");
    expect(modal).toHaveClass("hidden");

    // Open modal by clicking the open button
    const openButton = screen.getByText("Watch our video tutorial");
    fireEvent.click(openButton);
    expect(modal).not.toHaveClass("hidden");

    // Close modal by clicking overlay
    const overlay = screen.queryByTitle("video-modal");
    fireEvent.click(overlay);

    expect(modal).toHaveClass("hidden");
  });
});
