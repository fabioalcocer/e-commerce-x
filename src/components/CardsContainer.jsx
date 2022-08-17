import { useRef, useState, useContext } from "react";
import { AppContext, ProductContext } from "../Context";
import Card from "./Card";
import Notification from "./Notification";
import SlideCart from "./SlideCart";
import Tags from "./Tags";
import Filters from "./Filters";
import Loading from "./Loader";

function CardsContainer() {
  const { dataProducts, setDataProducts, dataInitial, isLoading } =
    useContext(AppContext);

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
    setDataProducts(dataInitial);

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
          dataProducts,
          setDataProducts,
          products,
          setProducts,
          method,
          setMethod,
          size,
          setSize,
          filterProducts,
        }}
      >
        <Notification refNoti={refNotification} />
        <section className="container mx-auto max-w-7xl">
          <Tags />
          <Filters />
        </section>
        <section className="container mx-auto flex min-h-[50vh] items-center justify-center pb-5">
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
