import { Button, PrimaryButton } from "../button/button";
import { Form } from "../form/form";

//Sample view to showcase Button.WithLink
export const ReportBugView = () => {
  return (
    <Form>
      <div>
        <Button.WithLink to={"main"} />
        <p>Report a problem</p>
      </div>
      <Form.TextArea
        className=""
        id="question-1"
        labelText="Whate were you trying to do?"
      />
      <Form.TextArea
        className=""
        id="question-2"
        labelText="What was the problem?"
      />
      <Form.TextArea
        className=""
        id="question-3"
        labelText="What did you expect to happen?"
      />
      <PrimaryButton onClick={() => null} text={"Send report"} />
    </Form>
  );
};
