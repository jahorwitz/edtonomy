import { useForm } from "react-hook-form";
import Awful from "../../images/Emotion=Awful.svg";
import Good from "../../images/Emotion=Good.svg";
import Great from "../../images/Emotion=Great.svg";
import Okay from "../../images/Emotion=Okay.svg";
import Soso from "../../images/Emotion=So-so.svg";
import { Form } from "./form";

export default {
  component: Form,
  title: "Form",
};

export const Default = () => {
  const { register, handleSubmit } = useForm();
  return (
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
        labelText="What were you trying to do?"
        placeholder="I was trying to create a new teaching event..."
        register={register}
      />
      <Form.TextArea
        id="question-3"
        labelText="What were you trying to do?"
        placeholder="I was trying to create a new teaching event..."
        register={register}
      />
      <Form.TextArea
        id="question-4"
        labelText="Is this Ok?"
        placeholder="Yes It is "
        register={register}
      />
      <Form.Submit>Send Report</Form.Submit>
    </Form>
  );
};

export const FormWithRadioButtonGroup = () => {
  const { register, handleSubmit, setValue, watch } = useForm();
  return (
    <Form
      onSubmit={handleSubmit((values) => {
        alert(JSON.stringify(values));
      })}
    >
      <Form.RadioButtonGroup
        id="nps-score"
        className="flex gap-2 my-3"
        setValue={setValue}
        watch={watch}
        options={[
          {
            value: 1,
            Icon: Awful,
            text: "Awful",
          },
          {
            value: 2,
            Icon: Soso,
            text: "So-so",
          },
          {
            value: 3,
            Icon: Okay,
            text: "Okay",
          },
          {
            value: 4,
            Icon: Good,
            text: "Good",
          },
          {
            value: 5,
            Icon: Great,
            text: "Great",
          },
        ]}
      />
      <Form.TextArea
        id="additional-comments"
        labelText="Please share any additional thoughts"
        placeholder="..."
        register={register}
      />
      <Form.Submit>Send Report</Form.Submit>
    </Form>
  );
};
