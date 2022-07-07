import logo from "../assets/logo.png";

function Header() {
  return (
    <header>
      <img className="mx-auto h-32 w-32 flex mb-2" src={logo} alt="logo" />
    </header>
  );
}

export default Header;
