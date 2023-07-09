import { PrimaryButton } from "../button/button";

export const WidgetButton = ({ onClick }) => {
  return (
    <PrimaryButton
      onClick={onClick}
      text="Support"
      className={
        "absolute bottom-[36.42px] right-10 rounded-2xl pt-3 pb-4 px-4 text-base leading-4 font-bold"
      }
    />
  );
};

//styles font-bold text-white absolute bottom-[36.42px] right-10 bg-[#FF533D] pt-[12px] pl-[16px] pr-[16px] pb-[16px] rounded-[16px]
