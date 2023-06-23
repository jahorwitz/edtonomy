import { useForm } from "react-hook-form";
import Form from "./form";
const FormContainer = ({children}) => {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex flex-col w-96">
      <Form onSubmit={handleSubmit(onSubmit)}>
        {children}
      </Form>
    </div>
  );
};
export default FormContainer;
