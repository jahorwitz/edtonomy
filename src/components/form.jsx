const Form = ({ children, onSubmit, register, ...htmlFormAttributes }) => (
  <>
    <form onSubmit={onSubmit} className="font-['Inter'] not-italic">
      {children}
    </form>
  </>
);
Form.TextArea = (label, placeholder, ...htmlInputElement) => (
  <label>
    <div className="mx-[24px] font-['Inter'] not-italic font-medium text-[1.25rem] text-black text-sm/[120%]">
      What were you trying to do?
    </div>
    <textarea
      className="w-80 h-24 font-['Inter'] not-italic pl-[12px] pt-[12px] pr-[12px] resize-none mx-[24px] mt-[16px] mb-[24px] border border-solid border-black/[0.4] rounded-lg "
      placeholder="i was trying to create a new teaching event..."
      type="text"
      minLength="1"
      maxLength="40"
    />
  </label>
);
export default Form;
