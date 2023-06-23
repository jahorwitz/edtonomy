import FormContainer from "./form-container";
import Form from "./form";
export default {
  component: FormContainer,
  title: "Form",
};

const Template = (args) => {return(<FormContainer {...args} />)};

export const Default = Template.bind({});
Default.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX"
  },
  children: (
      <>
    <Form.TextArea labelText={"What were you trying to do?"} placeHolder={"I was trying to create a new teaching event..."}/>
    <Form.TextArea labelText={"What were you trying to do?"} placeHolder={"I was trying to create a new teaching event..."}/>
    <Form.TextArea labelText={"What were you trying to do?"} placeHolder={"I was trying to create a new teaching event..."}/>
    <Form.TextArea labelText={"Is this Ok?"} placeHolder={"Yes It is "}/>
    </>
    )
};