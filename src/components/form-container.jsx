import { useForm } from "react-hook-form";
import Form from "./form";
const FormContainer = () => {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex flex-col w-96">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.TextArea labelText={"What were you trying to do?"} placeHolder={"I was trying to create a new teaching event..."}/>
        <Form.TextArea labelText={"What were you trying to do?"} placeHolder={"I was trying to create a new teaching event..."}/>
        <Form.TextArea labelText={"What were you trying to do?"} placeHolder={"I was trying to create a new teaching event..."}/>
        <Form.TextArea labelText={"Is this Ok?"} placeHolder={"Yes It is "}/>
      </Form>
    </div>
  );
};
export default FormContainer;
