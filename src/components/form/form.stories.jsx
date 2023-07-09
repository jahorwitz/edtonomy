import { Button, PrimaryButton } from "../button/button";
import { Form } from "./form";
export default {
  component: Form,
  title: "Form",
};
const Template = (args) => {
  return <Form {...args} />;
};
export const Default = Template.bind({});
Default.args = {
  children: [
    <Form.TextArea
      key="question-1"
      id="question-1"
      labelText="What were you trying to do?"
      placeholder="I was trying to create a new teaching event..."
    />,
    <Form.TextArea
      key="question-2"
      id="question-2"
      labelText="What were you trying to do?"
      placeholder="I was trying to create a new teaching event..."
    />,
    <Form.TextArea
      key="question-3"
      id="question-3"
      labelText="What were you trying to do?"
      placeholder="I was trying to create a new teaching event..."
    />,
    <Form.TextArea
      key="question-4"
      id="question-4"
      labelText={"Is this Ok?"}
      placeholder={"Yes It is "}
    />,
  ],
};

export const BugView = Template.bind({});
BugView.args = {
  children: [
    <>
      <div>
        <Button.WithLink to={"main"} />
        <p>Report a problem</p>
      </div>
      <Form.TextArea
        className=""
        id="question-1"
        labelText="What were you trying to do?"
        placeholder="I was trying to create a new teaching event..."
      />
      <Form.TextArea
        className=""
        id="question-2"
        labelText="What was the problem?"
        placeholder="I have created an event but do not see it in my homepage"
      />
      <Form.TextArea
        className=""
        id="question-3"
        labelText="What did you expect to happen?"
        placeholder="I expected to see the event in my homepage"
      />
      <PrimaryButton onClick={() => null} text={"Send report"} />
    </>,
  ],
};
