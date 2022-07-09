import { useState } from "react";
import { BiSearch, BiCart } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";

function Search() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  return (
    <div className="relative mx-auto flex items-center gap-2 text-gray-600">
      <BiSearch className="absolute left-2 top-2 mt-0.5 text-2xl" />
      <input
        onChange={handleSearch}
        className="h-10 w-full rounded-3xl border-2 border-slate-300 bg-white px-10 pr-5 text-sm font-semibold focus:border-slate-400 focus:outline-none md:w-auto"
        type="search"
        name="search"
        placeholder="Buscar"
      />
      <BsWhatsapp className="transition-colors: cursor-pointer text-3xl duration-300 hover:text-green-500" />
      <BiCart className="cursor-pointer text-4xl" />
    </div>
  );
}

export default Search;
