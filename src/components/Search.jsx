import { AppContext } from "../Context.jsx";
import { useState, useContext } from "react";
import { BiSearch, BiCart, BiMoon, BiSun } from "react-icons/bi";

function Search() {
  const { count, openSlide } = useContext(AppContext);
  const [search, setSearch] = useState("");
  const [theme, setTheme] = useState(true);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const onDarkMode = () => {
    document.querySelector("body").classList.toggle("dark");
  };

  const handleThemeIcon = () => {
    if (theme) {
      return setTheme(false);
    }
    return setTheme(true);
  };

  return (
    <>
      <div className="relative mx-auto flex items-center gap-2 text-gray-600 dark:text-slate-300 md:mx-0 lg:gap-3">
        <BiSearch className="absolute left-2 top-1/2 mt-0.5 -translate-y-1/2 transform text-2xl text-gray-500 lg:mt-0" />
        <input
          onChange={handleSearch}
          className="h-10 w-full rounded-3xl border-2 border-slate-300 bg-white px-10 pr-5 text-sm font-semibold 
        focus:border-slate-600 focus:outline-none focus:ring-0 dark:border-slate-500 dark:bg-slate-800 
        dark:text-slate-200 dark:placeholder-slate-300 dark:focus:border-gray-400 md:w-auto"
          type="search"
          name="search"
          placeholder="Buscar"
        />
        <div
          className="text-3xl"
          onClick={() => {
            onDarkMode(), handleThemeIcon();
          }}
        >
          {theme ? (
            <BiSun className="transition-colors: cursor-pointer text-2xl text-slate-600 duration-300 hover:text-black dark:text-slate-200 dark:hover:text-white  lg:text-3xl" />
          ) : (
            <BiMoon className="transition-colors: cursor-pointer text-2xl text-slate-600 duration-300 hover:text-black dark:text-slate-200 dark:hover:text-white  lg:text-3xl" />
          )}
        </div>
        <div>
          <BiCart
            onClick={openSlide}
            className="transition-colors: cursor-pointer text-3xl  duration-300 hover:text-amber-500 lg:text-4xl"
          />
          <p className="absolute right-0 -mt-9 -mr-2 h-5 w-5 rounded-[50%] bg-red-500 text-center text-sm font-bold text-white ">
            {count}
          </p>
        </div>
      </div>
    </>
  );
}

export default Search;
