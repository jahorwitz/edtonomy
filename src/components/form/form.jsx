import cx from "classnames";
import { PrimaryButton, RadioButton } from "../button";
//commented out the line above because it had import problems --Cristopher Campos
// the Form component take as argument the children elements, an onSubmit function and atributes for a form tag.
export const Form = ({ className, children, onSubmit, ...rest }) => {
  return (
    // form element
    <form className={className} onSubmit={onSubmit} {...rest}>
      {children}
    </form>
  );
};
// the Form.TextArea element take as argument props and htmlInputElement
Form.TextArea = ({ className, labelText, id, register, ...rest }) => {
  return (
    <>
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
          {...register(id)}
        />
      </div>
    </>
  );
};

Form.Submit = ({ children }) => {
  return <PrimaryButton type="submit">{children}</PrimaryButton>;
};

Form.RadioButtonGroup = ({ className, id, options, setValue, watch }) => {
  const selected = watch(id);

  return (
    <ul className={cx("", className)}>
      {options.map((option) => (
        <li key={option.value}>
          <RadioButton
            className={`${selected === option.value ? "border-black" : ""}`}
            icon={option.Icon}
            onClick={() => setValue(id, option.value)}
            text={option.text}
            selected={selected === option.value}
          />
        </li>
      ))}
    </ul>
  );
};

Form.TextArea.displayName = "Form.TextArea";
Form.Submit.displayName = "Form.Submit";
Form.RadioButtonGroup.displayName = "Form.RadioButtonGroup";
