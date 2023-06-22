import { useForm } from "react-hook-form";

const Form = ({ children, onSubmit, ...htmlFormAttributes }) => (
  <>
    <form onSubmit={onSubmit} className="font-['Inter'] not-italic" data-testid="form-1">
      {children}
    </form>
  </>
);
Form.TextArea = (props,...htmlInputElement) => {
  const {
    register
  } = useForm();
  return (
  <label>
    <div className="mx-[24px] font-['Inter'] not-italic font-medium text-[1.25rem] text-black leading-[120%]">
      {props.labelText}
    </div>
    <textarea
      className="w-[363px] h-[105px] font-['Inter'] text-black/[.04] font-medium text-sm/[120%] text-[1rem] not-italic pl-[12px] pt-[12px] pr-[12px] resize-none mx-[24px] mt-[16px] mb-[24px] border border-solid border-black/[0.4] rounded-lg "
      placeholder= {props.placeHolder}
      type="text"
      minLength="1"
      maxLength="40"
      {...register(props.labelText)}
    />
  </label>
  );
};
export default Form;
