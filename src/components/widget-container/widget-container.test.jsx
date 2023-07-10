import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { WidgetContainer } from "./widget-container";

test("clicking the support button shows the widget", async () => {
  render(<WidgetContainer />);

  // Simulate a click on the support button
  fireEvent.click(screen.getByText("Support"));

  // Wait for the animation to complete and the widget to be visible.
  await waitFor(() => {
    expect(screen.queryByText("Support")).not.toBeInTheDocument();
  });
});
