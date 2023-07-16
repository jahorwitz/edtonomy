import { useForm } from "react-hook-form";
import { Form } from "../components";
import chevron from "../images/chevron-left-black.svg";

export const BugReport = ({ goToNamedStep }) => {
  const { register, handleSubmit } = useForm();
  return (
    <>
      <div className="flex justify-between items-center my-[16px]">
        <div className="flex items-center gap-[16px]">
          <button onClick={() => goToNamedStep("welcome")}>
            <img src={chevron} />
          </button>
          <h1 className="text-xl">Report a problem</h1>
        </div>
      </div>

      <Form
        onSubmit={handleSubmit((values) => {
          alert(JSON.stringify(values));
        })}
      >
        <Form.TextArea
          id="question-1"
          labelText="What were you trying to do?"
          placeholder="I was trying to create a new teaching event..."
          register={register}
        />
        <Form.TextArea
          id="question-2"
          labelText="What was the problem?"
          placeholder="I have created an event but don't see it in my homepage"
          register={register}
        />
        <Form.TextArea
          id="question-3"
          labelText="What did you expect to happen?"
          placeholder="I expected to see the event in my homepage"
          register={register}
        />
        <p className="opacity-40 text-center mb-3">
          We will get back to you on your email (useremail@gmail.com)
        </p>
        <Form.Submit>Send Report</Form.Submit>
      </Form>
    </>
  );
};
