function Tags() {
  const isActive = true;

  return (
    <div className="mt-4">
      <ul className="text-md flex overflow-x-auto text-center font-medium first-letter:text-gray-100">
        <li
          className={`mr-2 inline-block rounded-3xl bg-gray-800 py-2 px-3 text-white ${
            isActive ? "bg-slate-900 text-white" : "bg-gray-100 text-black"
          }`}
        >
          Todo
        </li>
        <li className="mr-2 inline-block rounded-3xl bg-gray-100 py-2 px-3 text-black">
          Sudaderas
        </li>
        <li className="mr-2 inline-block rounded-3xl bg-gray-100 py-2 px-3 text-black">
          Pantalones
        </li>
        <li className="mr-2 inline-block rounded-3xl bg-gray-100 py-2 px-3 text-black">
          Shorts
        </li>
        <li className="mr-2 inline-block rounded-3xl bg-gray-100 py-2 px-3 text-black">
          Deportivos
        </li>
        <li className="mr-2 inline-block rounded-3xl bg-gray-100 py-2 px-3 text-black">
          Camisetas
        </li>
        <li className="mr-2 inline-block rounded-3xl bg-gray-100 py-2 px-3 text-black">
          Tenis
        </li>
      </ul>
    </div>
  );
}

export default Tags;
