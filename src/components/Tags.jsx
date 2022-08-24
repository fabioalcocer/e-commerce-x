import { useContext, useState } from "react";
import { ProductContext } from "../Context";

function Tags() {
  const [active, setActive] = useState(false);
  const { filterProducts  } = useContext(ProductContext);

  const tags = [
    { id: 1, text: "Todo" },
    { id: 2, text: "Sudaderas" },
    { id: 3, text: "Poleras" },
    { id: 4, text: "Shorts" },
    { id: 5, text: "Pantalones" },
    { id: 6, text: "Tennis" },
  ];

  return (
    <div className="mt-4">
      <ul className="text-md flex overflow-x-auto p-1 pl-[2px] text-center font-medium text-gray-100">
        {tags.map((tag) => (
          <li
            key={tag.id}
            onClick={(e) => {
              setActive(tag.id),
              filterProducts(e)
            }}
            className={`tag mr-2 inline-block rounded-3xl bg-gray-800 py-2 px-3 text-white ${
              active === tag.id
                ? "bg-slate-900 text-white  dark:outline dark:outline-2 dark:outline-slate-50"
                : "dark:bg-gray-100 bg-gray-200 bg-opacity-70 text-black"
            } cursor-pointer`}
          >
            {tag.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tags;
