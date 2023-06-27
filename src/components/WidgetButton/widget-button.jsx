export const WidgetButton = ({ label, handleClick }) => {
  return (
    <button
      className="font-bold text-white absolute bottom-[36.42px] right-10 bg-[#FF533D] pt-[12px] pl-[16px] pr-[16px] pb-[16px] rounded-[16px]"
      onClick={handleClick}
    >
      {label}
    </button>
  );
};
