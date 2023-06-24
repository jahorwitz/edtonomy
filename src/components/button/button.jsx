const Button = ({ onClick, style, children, ...HTMLButtonElement }) => {
  return (
    <button onClick={onClick} className={style} {...HTMLButtonElement}>
      {children}
    </button>
  );
};

Button.WithIcon = ({ icon }) => {
  return <img src={icon} className="w-6 h-6" />;
};
Button.WithLink = ({ icon, to }) => {
  return <img src={icon} onClick={to} className="w-6 h-6 self-center" />;
};

export default Button;
