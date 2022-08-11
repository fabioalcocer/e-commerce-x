import { useContext } from "react";
import { ProductContext } from "../Context.jsx";

function Sizes(product) {
  const { setSize } = useContext(ProductContext);

  
  const handleSize = (e) => {
    setSize(e.target.innerText)
  }
  
  return (
    <div className="flex justify-start gap-2">
      {product.sizes.map((size) => (
        <button onClick={handleSize} key={size} className="transition-colors: cursor-pointer rounded-md bg-gray-200 px-2 py-1 font-semibold text-slate-800 duration-300 hover:bg-indigo-500 hover:text-slate-100 focus:text-slate-100 focus:bg-indigo-600 focus:outline-none dark:bg-slate-600 dark:text-slate-100 dark:hover:bg-indigo-500 dark:focus:bg-indigo-700">
          <span className="  ">{size}</span>
        </button>
      ))}
    </div>
  );
}

export default Sizes;
