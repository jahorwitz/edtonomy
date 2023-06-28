import cx from "classnames";
import { useForm } from "react-hook-form";
// the Form component take as argument the children elements, an onSubmit function and atributes for a form tag.
export const Form = ({ className, children, onSubmit, ...rest }) => {
  const {
    handleSubmit,
    // formState: { errors },
  } = useForm();

  return (
    // form element
    <form className={className} onSubmit={handleSubmit(onSubmit)} {...rest}>
      {children}
    </form>
  );
};
// the Form.TextArea element take as argument props and htmlInputElement
Form.TextArea = ({ className, labelText, id, ...rest }) => {
  // the register function from recat-hook-form is been call here
  const { register } = useForm();
  return (
    <div className={cx("flex flex-col", className)}>
      <label
        htmlFor={id}
        className="font-medium text-[1.25rem] text-black leading-[120%]"
      >
        {labelText}
      </label>
      <textarea
        id={id}
        className="max-w-[363px] h-[105px] text-black font-medium leading-[120%] text-[1rem] pl-[12px] pt-[12px] pr-[12px] resize-none mt-[16px] mb-[24px] border border-solid border-black/[0.4] rounded-lg "
        type="text"
        {...rest}
        //registering the name for the text are in the hook
        {...register("Form-TextArea")}
      />
    </div>
  );
};

Form.TextArea.displayName = "Form.TextArea";
