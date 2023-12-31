import cx from "classnames";

// Button component has flexible style argument as well as onClick, children and button attributes
export const Button = ({ onClick, className, children, href, ...rest }) => {
  return href ? (
    <a href={href} className={className} {...rest}>
      {children}
    </a>
  ) : (
    <button onClick={onClick} className={className} type="button" {...rest}>
      {children}
    </button>
  );
};
//WithIcon renders within a button component
Button.WithIcon = ({ onClick, icon, text, ...rest }) => {
  return (
    <Button
      onClick={onClick}
      className="border rounded-lg overflow-hidden"
      {...rest}
    >
      <div className="bg-black/5 px-9 py-3 flex flex-col items-center duration-300 text-xs leading-extra-tight font-medium font-inter hover:bg-black/10">
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
    <Button onClick={onClick} className="border border-black/30 rounded-lg p-4">
      <div className="flex">
        <div className="mr-auto font-inter">
          <p className="text-left text-edt-black text-xl font-medium">
            {textBold}
          </p>
          <p className="text-base leading-extra-tight text-black/60 text-left">
            {text}
          </p>
        </div>
        <img src={icon} className="w-6 h-6 self-center" />
      </div>
    </Button>
  );
};

export const PrimaryButton = ({ onClick, children, className, ...rest }) => {
  return (
    <Button
      onClick={onClick}
      className={cx(
        className,
        "border rounded-lg w-full overflow-hidden bg-edt-red py-4 duration-300 text-xl leading-extra-tight text-white font-medium font-inter hover:bg-edt-dark-red"
      )}
      {...rest}
    >
      {children}
    </Button>
  );
};

export const SecondaryOutlineButton = ({ onClick, children }) => {
  return (
    <Button
      onClick={onClick}
      className="border-2 border-edt-black rounded-lg overflow-hidden w-20 h-12 duration-300 text-xl leading-extra-tight font-medium font-inter hover:border-0 hover:bg-edt-red hover:text-white"
    >
      {children}
    </Button>
  );
};

export const RadioButton = ({ className, icon, text, onClick, selected }) => {
  return (
    <Button
      onClick={onClick}
      className={cx(
        className,
        "rounded-xl bg-black/5 h-[54px] text-base font-medium leading-extra-tight text-edt-black font-inter",
        selected && "bg-white border border-edt-red"
      )}
    >
      <div
        className={cx(
          "flex flex-col justify-center items-center gap-1 px-4 py-2",
          icon && "w-[68px] text-xs"
        )}
      >
        {icon && <img src={icon} alt={text} className="w-[20px]" />}
        {text}
      </div>
    </Button>
  );
};

Button.displayName = "Button";
Button.WithIcon.displayName = "Button.WithIcon";
Button.WithLink.displayName = "Button.WithLink";
PrimaryButton.displayName = "PrimaryButton";
SecondaryOutlineButton.displayName = "SecondaryOutlineButton";
RadioButton.displayName = "RadioButton";
