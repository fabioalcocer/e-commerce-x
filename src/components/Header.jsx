import logo from "../assets/logo.png";
import Search from "./Search";

function Header() {
  return (
    <header>
      <img className="mx-auto mb-2 flex h-32 w-32" src={logo} alt="logo" />
      <Search />
    </header>
  );
}

export default Header;
