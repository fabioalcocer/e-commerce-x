import { useContext } from "react";
import { AppContext } from "../Context.jsx";

function ProductsCart({ products }) {
  const { setProducts } = useContext(AppContext);

  return (
    <div className="mt-8">
      <div className="flow-root">
        <ul
          role="list"
          className="-my-6 divide-y divide-slate-300 dark:divide-slate-600"
        >
          {products.map((product) => (
            <li key={product._id} className="flex py-6">
              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-slate-300 dark:border-slate-600">
                <img
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="ml-4 flex flex-1 flex-col">
                <div>
                  <div className="flex justify-between text-lg font-semibold text-gray-900 dark:text-slate-200">
                    <h3>{product.name}</h3>
                    <p className="ml-4 font-semibold text-emerald-600 dark:text-emerald-500">{`$${product.price}`}</p>
                  </div>
                  <p className="mt-2 text-base capitalize text-gray-500 dark:text-gray-300">
                    Talla: {product.currentSize}
                  </p>
                </div>
                <div className="flex flex-1 items-end justify-between">
                  <p className="text-sm text-gray-500 dark:text-gray-200 md:text-base">
                    Cantidad: {product.quantity}
                  </p>

                  <div className="flex">
                    <button
                      onClick={() => {
                        (reduce) => reduce - product.price,
                          setProducts(
                            products.filter((x) => x.id !== product.id)
                          );
                      }}
                      type="button"
                      className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-500 dark:hover:text-indigo-400"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductsCart;
