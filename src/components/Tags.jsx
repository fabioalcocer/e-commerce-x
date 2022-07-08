function Tags() {
  const isActive = true

  return (
    <ul className="lista mt-5 flex text-md font-medium text-center first-letter:text-gray-100 overflow-x-auto">
      <li className={`mr-2 inline-block py-2 px-3 rounded-3xl bg-gray-800 text-white ${isActive ? 'bg-slate-900 text-white' : 'bg-gray-100 text-black'}`}>
          Todo
      </li>
      <li className="mr-2 inline-block py-2 px-3 rounded-3xl bg-gray-100 text-black">
          Sudaderas
      </li>
      <li className="mr-2 inline-block py-2 px-3 rounded-3xl bg-gray-100 text-black">
          Pantalones
      </li>
      <li className="mr-2 inline-block py-2 px-3 rounded-3xl bg-gray-100 text-black">
          Vermudas
      </li>
      <li className="mr-2 inline-block py-2 px-3 rounded-3xl bg-gray-100 text-black">
          Tenis
      </li>      
    </ul>
  );
}

export default Tags;
