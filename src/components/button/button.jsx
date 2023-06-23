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
  return <i src={icon} onClick={to}></i>;
};

export default Button;
