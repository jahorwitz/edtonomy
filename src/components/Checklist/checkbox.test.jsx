import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Checklist from "./checklist";

test("should update state of Checkbox component on click", async () => {
  render(<Checklist.Checkbox />);

  expect(screen.queryByRole("checkbox")).not.toBeChecked();

  await userEvent.click(screen.getByRole("checkbox"));

  expect(screen.getByRole("checkbox")).toBeChecked();
});
