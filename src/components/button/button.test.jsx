import { render, screen } from "@testing-library/react";
import { Button } from "./button";

//Create a sample component with Button
const TestButton = ({ onClick }) => {
  return (
    <Button onClick={onClick} className="">
      Test
    </Button>
  );
};
//Render sample component and check for text
test("render button", () => {
  render(<TestButton onClick={() => true} />);

  const element = screen.getByText(/test/i);

  expect(element).toBeInTheDocument();
});
