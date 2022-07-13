import Card from "./Card";
import { useEffect, useState } from "react";
import { getAllProducts } from "../services/products";
import RadioButtons from "./RadioButtons";

function CardsContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then(setProducts)
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="container mx-auto pb-5">
      <div className="lg:-mx-2 lg:flex">
        <div className="lg:w-5/5 mx-auto mt-6 lg:mt-0 lg:px-2 ">
          <div className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            
          {/* TODO Convertir todo esto a componente y crearlos dinamicamente segun los datos de la API */}
            <>
              {products.map((product) => (
                <article className="mx-auto flex w-full max-w-[300px] flex-col justify-center gap-1 rounded-lg p-4 shadow-sm">
                  <img
                    className="h-80 w-full rounded-md object-cover xl:h-96"
                    src={product.src}
                    alt="T-Shirt"
                  />
                  <div className="mt-1 flex w-full items-center justify-between py-2">
                    <h4 className="text-lg font-medium text-gray-700">
                      {product.name}
                    </h4>
                  </div>
                  <div className="flex justify-between pr-2">
                    <p className="font-bold text-green-600">{product.price}</p>
                    <RadioButtons />
                  </div>
                  <button className="mt-4 flex w-full transform items-center justify-center rounded-md bg-gray-800 px-2 py-2 font-medium capitalize tracking-wide text-white transition-colors duration-200 hover:bg-indigo-500 focus:bg-indigo-700 focus:outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mx-1 h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                    <span className="mx-1">Add to cart</span>
                  </button>
                </article>
              ))}
            </>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardsContainer;
