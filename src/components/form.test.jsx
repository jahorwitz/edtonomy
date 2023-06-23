import {render, screen, cleanup} from '@testing-library/react'
import FormContainer from './form-container'
import Form from './form'
const children = (
    <>
  <Form.TextArea labelText={"What were you trying to do?"} placeHolder={"I was trying to create a new teaching event..."}/>
  <Form.TextArea labelText={"What were you trying to do?"} placeHolder={"I was trying to create a new teaching event..."}/>
  <Form.TextArea labelText={"What were you trying to do?"} placeHolder={"I was trying to create a new teaching event..."}/>
  <Form.TextArea labelText={"Is this Ok?"} placeHolder={"Yes It is "}/>
  </>
  )
test("render test from component", () => {
    render(<FormContainer {...children}/>);
    const formElement = screen.getByTestId("form-1");
    expect(formElement).toBeInTheDocument();
})