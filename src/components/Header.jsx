import logo from "../assets/logo.webp";
import Search from "./Search";

function Header() {
  return (
    <header className="max-w-7xl container mx-auto md:flex justify-between">
      <img className="mx-auto mb-2 flex h-36 w-36 md:mx-0" src={logo} alt="logo" />
      <Search />
    </header>
  );
}

export default Header;
