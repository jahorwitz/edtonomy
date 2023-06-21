import { useForm } from "react-hook-form";
import Form from "./form";
const FormContainer = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex flex-col w-96">
      <Form onSubmit={handleSubmit(onSubmit)} register={register}>
        <Form.TextArea />
        <Form.TextArea />
        <Form.TextArea />
      </Form>
    </div>
  );
};
export default FormContainer;
