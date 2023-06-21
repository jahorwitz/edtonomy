import FormContainer from "./form-container";

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
    state: "TASK_INBOX",
  },
};
