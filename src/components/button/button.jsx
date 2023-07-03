import cx from "classnames";

// Button component has flexible style argument as well as onClick, children and button attributes
export const Button = ({ onClick, style, children, ...rest }) => {
  return (
    <button onClick={onClick} className={style} {...rest}>
      {children}
    </button>
  );
};
//WithIcon renders within a button component
Button.WithIcon = ({ onClick, icon, text }) => {
  return (
    <Button onClick={onClick} style="border rounded-lg overflow-hidden">
      <div className="bg-black/5 px-9 py-1 flex flex-col items-center duration-300 text-xs leading-extra-tight font-medium font-inter hover:bg-black/10">
        <img src={icon} className="w-6 h-6" />
        {text}
      </div>
    </Button>
  );
};
//WithLink is the same as WithIcon but routes to a page
// TODO: Implement routing on this component using 'to'
Button.WithLink = ({ onClick, icon, to, textBold, text }) => {
  return (
    <Button onClick={onClick} style="border border-black/30 rounded-lg p-4">
      <div className="flex w-[363px]">
        <div className="mr-auto font-inter">
          <p className="text-edt-black text-xl font-medium">{textBold}</p>
          <p className="text-base leading-extra-tight text-black/60 text-left">
            {text}
          </p>
        </div>
        <img src={icon} className="w-6 h-6 self-center" />
      </div>
    </Button>
  );
};

export const PrimaryButton = ({ onClick, text }) => {
  return (
    <Button
      onClick={onClick}
      // style="border rounded-lg overflow-hidden"
    >
      <div className="border rounded-lg overflow-hidden bg-edt-red px-32 py-4 duration-300 text-xl leading-extra-tight text-white font-medium font-inter hover:bg-edt-dark-red">
        {text}
      </div>
    </Button>
  );
};

export const SecondaryOutlineButton = ({ onClick, text }) => {
  return (
    <Button
      onClick={onClick}
      style="border-2 border-edt-black rounded-lg overflow-hidden w-20 h-12 duration-300 text-xl 
        leading-extra-tight font-medium font-inter hover:border-0 hover:bg-edt-red hover:text-white"
    >
      {text}
    </Button>
  );
};

export const SecondarySelectedButton = ({ onClick, selected, text }) => {
  const buttonClassName = `rounded-xl bg-black/5 w-44 h-[54px] text-base font-medium 
    leading-extra-tight text-edt-black font-inter ${
      selected ? "bg-white border border-edt-red" : ""
    }`;

  return (
    <Button onClick={onClick} className={buttonClassName} selected={selected}>
      {text}
    </Button>
  );
};

export const RadioButton = ({ icon, description, style }) => {
  return (
    <button
      type="radio"
      className={cx(
        `w-20 h-20 bg-transparent border border-grey-500 rounded-md`,
        style
      )}
    >
      <img src={icon} alt={description} />
    </button>
  );
};
