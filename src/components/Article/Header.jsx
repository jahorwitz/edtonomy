import logo from "../../image/logo.svg";

export default function Header() {
  return (
    <header className="header__container">
      <img className="header__logo" src={logo} alt="logo" />
    </header>
  );
}
