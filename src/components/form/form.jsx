import cx from "classnames";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Awful from "../../images/Emotion=Awful.svg";
import Good from "../../images/Emotion=Good.svg";
import Great from "../../images/Emotion=Great.svg";
import Okay from "../../images/Emotion=Okay.svg";
import Soso from "../../images/Emotion=So-so.svg";
import { PrimaryButton, RadioButton } from "../button/button";
//commented out the line above because it had import problems --Cristopher Campos
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
          {...register("Form-TextArea")}
        />
      </div>
    </>
  );
};

Form.Submit = ({ onSubmit, selected, text }) => {
  return (
    <PrimaryButton
      onClick={onSubmit}
      selected={selected}
      text={text}
      className={cx(selected ? "opacity-60" : "")}
    >
      {text}
    </PrimaryButton>
  );
};

Form.RadioButton = ({}) => {
  return <RadioButton selected={false} icon={Good} />;
};

Form.RadioButtonGroup = ({ className }) => {
  const [selected, setSelected] = useState(null);

  const handleSelection = (value) => {
    setSelected(value);
  };

  return (
    <ul className={cx("", className)}>
      <li>
        <RadioButton
          className={`${selected === "Great" ? "border-black" : ""}`}
          selected={selected === "Great"}
          icon={Great}
          onClick={() => handleSelection("Great")}
          description="Great"
        />
      </li>
      <li>
        <RadioButton
          className={`${selected === "Good" ? "border-black" : ""}`}
          selected={selected === "Good"}
          icon={Good}
          onClick={() => handleSelection("Good")}
          description="Good"
        />
      </li>
      <li>
        <RadioButton
          className={`${selected === "Okay" ? "border-black" : ""}`}
          selected={selected === "Okay"}
          icon={Okay}
          onClick={() => handleSelection("Okay")}
          description="Okay"
        />
      </li>
      <li>
        <RadioButton
          className={`${selected === "So-so" ? "border-black" : ""}`}
          selected={selected === "So-so"}
          icon={Soso}
          onClick={() => handleSelection("So-so")}
          description="So-so"
        />
      </li>
      <li>
        <RadioButton
          className={`${selected === "Awful" ? "border-black" : ""}`}
          selected={selected === "Awful"}
          icon={Awful}
          onClick={() => handleSelection("Awful")}
          description="Awful"
        />
      </li>
    </ul>
  );
};

Form.TextArea.displayName = "Form.TextArea";
Form.Submit.displayName = "Form.Submit";
Form.RadioButton.displayName = "Form.RadioButton";
Form.RadioButtonGroup.displayName = "Form.RadioButtonGroup";
