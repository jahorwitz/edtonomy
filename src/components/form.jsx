import { useForm } from "react-hook-form";
// the Form component take as argument the children elements, an onSubmit function and atributes for a form tag.
const Form = ({ children, onSubmit, ...htmlFormAttributes }) => (
  // form element
  <>
    <form
      onSubmit={onSubmit}
      className="font-['Inter'] not-italic"
      data-testid="form-1"
    >
      {children}
    </form>
  </>
);
// the Form.TextArea element take as argument props and htmlInputElement
Form.TextArea = (props, ...htmlInputElement) => {
  // the register function from recat-hook-form is been call here
  const { register } = useForm();
  return (
    <label>
      <div className="mx-[24px] font-['Inter'] not-italic font-medium text-[1.25rem] text-black leading-[120%]">
        {props.labelText}
      </div>
      <textarea
        className="w-[363px] h-[105px] font-['Inter'] text-black font-medium leading-[120%] text-[1rem] not-italic pl-[12px] pt-[12px] pr-[12px] resize-none mx-[24px] mt-[16px] mb-[24px] border border-solid border-black/[0.4] rounded-lg "
        placeholder={props.placeHolder}
        type="text"
        minLength="1"
        maxLength="40"
        //registering the name for the text are in the hook
        {...register("Form-TextArea")}
      />
    </label>
  );
};
export default Form;
