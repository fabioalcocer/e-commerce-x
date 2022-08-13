import { useEffect, useRef, useState } from "react";
import Card from "./Card";
import Notification from "./Notification";
import SlideCart from "./SlideCart";
import { ProductContext } from "../Context";
import Tags from "./Tags";
import Filters from "./Filters";

import { getDataProducts } from "../services/data";
import Loading from "./Loading";

function CardsContainer() {
  const [dataProducts, setDataProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getDataProducts()
      .then(setDataProducts)
      .then(() => setIsLoading(false))
      .catch((err) => console.log(err));
  }, []);

  const [products, setProducts] = useState([]);
  const [method, setMethod] = useState("Efectivo");
  const [size, setSize] = useState("");

  const refNotification = useRef(null);

  const showNotification = () => {
    refNotification.current.style.visibility = "visible";

    setTimeout(() => {
      refNotification.current.style.visibility = "hidden";
    }, 2000);
  };

  const filterProducts = (e) => {
    setDataProducts(dataProducts); //esto debe setear los productos al estado inicial

    if (e.target.innerText === "Todo") {
      return;
    }

    setDataProducts((dataProducts) =>
      dataProducts.filter(
        (products) => products.category === e.target.innerText
      )
    );
  };

  return (
    <>
      <ProductContext.Provider
        value={{
          products,
          setProducts,
          method,
          setMethod,
          size,
          setSize,
          dataProducts,
          filterProducts,
        }}
      >
        <Notification refNoti={refNotification} />
        <section className="container mx-auto max-w-7xl">
          <Tags />
          <Filters />
        </section>
        <section className="container mx-auto pb-5">
          <div className="lg:-mx-2 lg:flex">
            <div className="lg:w-5/5 mx-auto mt-6 lg:mt-0 lg:px-2 ">
              {isLoading ? (
                <Loading />
              ) : (
                <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  <>
                    {dataProducts.map((product) => (
                      <Card
                        key={product.id}
                        product={product}
                        showNotification={showNotification}
                      />
                    ))}
                  </>
                </div>
              )}
            </div>
          </div>
        </section>
        <SlideCart />
      </ProductContext.Provider>
    </>
  );
}

export default CardsContainer;
