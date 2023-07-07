import logo from "../../image/logo.svg";

export default function Header() {
  return (
    <header className="border-b border-black border-opacity-40">
      <img className="pt-5 pl-8 pb-4" src={logo} alt="logo" />
    </header>
  );
}
