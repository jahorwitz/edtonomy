const Button = ({ onClick, children, ...HTMLButtonElement }) => {
  return (
    <button onClick={onClick} {...HTMLButtonElement}>
      {children}
    </button>
  );
};

Button.WithIcon = ({ icon }) => {
  return <i src={icon}></i>;
};
Button.WithLink = ({ icon, to }) => {
  return <i src={icon} onClick={to}></i>;
};

export default Button;
