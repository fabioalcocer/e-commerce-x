import logo from "../assets/logo.png";
import Search from "./Search";

function Header() {
  return (
    <header>
      <img className="mx-auto h-32 w-32 flex mb-2" src={logo} alt="logo" />
      <Search />
    </header>
  );
}

export default Header;
