import cx from "classnames";
// Button component has flexible style argument as well as onClick, children and button attributes
export const Button = ({ onClick, className, children, ...rest }) => {
  return (
    <button onClick={onClick} className={className} {...rest}>
      {children}
    </button>
  );
};
//WithIcon renders within a button component
Button.WithIcon = ({ onClick, icon, text, className, iconClassName }) => {
  return (
    <Button
      onClick={onClick}
      className={cx(
        "border rounded-lg bg-black/5 px-9 py-1 flex flex-col items-center duration-300 text-xs leading-extra-tight font-medium font-inter hover:bg-black/10",
        className
      )}
    >
      <img src={icon} className={cx("w-6 h-6", iconClassName)} />
      {text}
    </Button>
  );
};
//WithLink is the same as WithIcon but routes to a page
// the 'to' prop will be the name of the view the button is meant to move to.
Button.WithLink = ({ onClick, icon, to, textBold, text, className }) => {
  return (
    <Button
      onClick={onClick}
      className={cx(
        "border border-black/30 rounded-lg p-4 w-[363px] flex",
        className
      )}
      goToNamedStep={to}
    >
      <div className="mr-auto font-inter">
        <p className="text-edt-black text-xl font-medium">{textBold}</p>
        <p className="text-base leading-extra-tight text-black/60 text-left">
          {text}
        </p>
      </div>
      <img src={icon} className="w-6 h-6 self-center" />
    </Button>
  );
};

export const PrimaryButton = ({ onClick, text, className }) => {
  return (
    <Button
      onClick={onClick}
      className={cx(
        "border rounded-lg bg-edt-red px-32 py-4 duration-300 text-xl leading-extra-tight text-white font-medium font-inter hover:bg-edt-dark-red",
        className
      )}
    >
      {text}
    </Button>
  );
};

export const SecondaryOutlineButton = ({ onClick, text, className }) => {
  return (
    <Button
      onClick={onClick}
      className={cx(
        "border-2 border-edt-black rounded-lg overflow-hidden w-20 h-12 duration-300 text-xl leading-extra-tight font-medium font-inter hover:border-0 hover:bg-edt-red hover:text-white",
        className
      )}
    >
      {text}
    </Button>
  );
};

export const SecondarySelectedButton = ({
  onClick,
  selected,
  text,
  className,
}) => {
  const buttonClassName = `rounded-xl bg-black/5 w-44 h-[54px] text-base font-medium 
    leading-extra-tight text-edt-black font-inter ${
      selected ? "bg-white border border-edt-red" : ""
    }`;

  return (
    <Button
      onClick={onClick}
      className={cx(buttonClassName, className)}
      selected={selected}
    >
      {text}
    </Button>
  );
};
