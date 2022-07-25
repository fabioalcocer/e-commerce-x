import AppContext from "../Context.jsx";
import { useState, useContext } from "react";
import { BiSearch, BiCart, BiMoon } from "react-icons/bi";

function Search() {
  const { count } = useContext(AppContext);

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const onDarkMode = () => {
    document.documentElement.classList.toggle("dark");
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
        <BiMoon
          onClick={onDarkMode}
          className="transition-colors: cursor-pointer text-3xl text-slate-600 duration-300 hover:text-black dark:text-slate-200  dark:hover:text-white"
        />
        <BiCart className="transition-colors: cursor-pointer text-4xl duration-300 hover:text-amber-500" />
        <p className="absolute right-0 -mt-5 -mr-2 h-5 w-5 rounded-[50%] bg-red-500 text-center text-sm font-bold text-white ">
          {count}
        </p>
      </div>
    </>
  );
}

export default Search;

// const preferedColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
// const slider = document.getElementById('slider');

// const setTheme = (theme) => {
//     document.documentElement.setAttribute('data-theme', theme);
//     localStorage.setItem('theme', theme);
// }

// slider.addEventListener('click', ()  => {
//     let switchToTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
//     setTheme(switchToTheme);
// });

// setTheme(localStorage.getItem('theme') || preferedColorScheme);
