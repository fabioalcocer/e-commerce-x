import { useState } from "react";

function Tags() {
  const [active, setActive] = useState(false);

  const tags = [
    { id: 1, text: "Todo" },
    { id: 2, text: "Sudaderas" },
    { id: 3, text: "Pantalones" },
    { id: 4, text: "Shorts" },
    { id: 5, text: "Camisetas" },
    { id: 6, text: "Tennis" },
  ];

  return (
    <div className="mt-4">
      <ul className="text-md flex overflow-x-auto text-center font-medium first-letter:text-gray-100">
        {tags.map((tag) => (
          <li
            key={tag.id}
            onClick={(e) => {
              setActive(tag.id), console.log(e.target.innerText);
            }}
            className={`tag mr-2 inline-block rounded-3xl bg-gray-800 py-2 px-3 text-white ${
              active === tag.id
                ? "bg-slate-900 text-white"
                : "bg-gray-100 text-black"
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
