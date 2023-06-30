// import { fireEvent, render, screen } from "@testing-library/react";
// import WidgetContainer from "./widget-container";

// test("renders WidgetContainer component", () => {
//   render(<WidgetContainer />);
// });

// test("clicking the button opens the container", () => {
//   fireEvent.click(screen.getByLabelText("Support"));
//   expect(screen.getByText("Welcom, Carlo!")).toBeInTheDocument();
// });

import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import WidgetContainer from "./widget-container";

test("clicking the support button shows the widget", async () => {
  render(<WidgetContainer />);

  // Verify that the widget is initially not visible
  expect(screen.queryByText("Welcom, Carlo!")).not.toBeInTheDocument();

  // Simulate a click on the support button
  // fireEvent.click(screen.getByLabelText("Support"));
  fireEvent.click(screen.getByText("Support"));

  // Wait for the animation to complete and the widget to be visible
  await waitFor(() => {
    expect(screen.getByText("Welcom, Carlo!")).toBeInTheDocument();
  });
});
