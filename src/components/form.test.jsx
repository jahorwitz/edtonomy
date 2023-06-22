import {render, screen, cleanup} from '@testing-library/react'
import FormContainer from './form-container'

test("render test from component", () => {
    render(<FormContainer/>);
    const formElement = screen.getByTestId("form-1");
    expect(formElement).toBeInTheDocument();
})