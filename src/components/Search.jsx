import { useState } from "react";
import { BiSearch, BiCart } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";

function Search() {

  const [search, setSearch] = useState("")

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  }

  return (
    <div className="relative flex items-center gap-2 mx-auto text-gray-600">
      <BiSearch className="absolute left-2 top-2 text-2xl mt-0.5"/>
      <input
        onChange={handleSearch}
        className="w-full md:w-auto border-2 border-slate-300 bg-white h-10 px-10 pr-5 rounded-3xl text-sm focus:outline-none focus:border-slate-400 font-semibold"
        type="search"
        name="search"
        placeholder="Buscar"
        />
      <BsWhatsapp className="text-3xl cursor-pointer hover:text-green-500 transition-colors: duration-300"/>
      <BiCart className="text-4xl cursor-pointer"/>
    </div>
  );
}

export default Search;
