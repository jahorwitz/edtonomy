// importing necesary components
import { useForm } from "react-hook-form";
import Form from "./form";
// form container takes a children prop 
const FormContainer = ({children}) => {
  // the handleSubmit and formState from react-hook-form are been call here
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();
  //onSubmit function can be edit
  const onSubmit = (data) => console.log(data);
  //form children are included here
  return (
    <div className="flex flex-col w-96">
      <Form onSubmit={handleSubmit(onSubmit)}>
        {children}
      </Form>
    </div>
  );
};
export default FormContainer;
