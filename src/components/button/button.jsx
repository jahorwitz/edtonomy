// Button component has flexible style argument as well as onClick, children and button attributes
const Button = ({ onClick, style, children, ...HTMLButtonElement }) => {
  return (
    <button onClick={onClick} className={style} {...HTMLButtonElement}>
      {children}
    </button>
  );
};
//WithIcon renders within a button component
Button.WithIcon = ({ icon }) => {
  return <img src={icon} className="w-6 h-6" />;
};
//WithLink is the same as WithIcon but redirects onClick to a page
Button.WithLink = ({ icon, to }) => {
  return <img src={icon} onClick={to} className="w-6 h-6 self-center" />;
};

export default Button;
