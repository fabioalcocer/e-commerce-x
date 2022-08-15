import { useRef, useState } from "react";
import { data } from "../services/data";
import Card from "./Card";
import Notification from "./Notification";
import SlideCart from "./SlideCart";
import { ProductContext } from "../Context";
import Tags from "./Tags";
import Filters from "./Filters";

function CardsContainer() {
  const [dataProducts, setDataProducts] = useState([...data]);
  const [products, setProducts] = useState([]);
  const [method, setMethod] = useState("Efectivo");


  const filterProducts = (e) => {
    setDataProducts([...data]);

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
            </div>
          </div>
        </section>
        <SlideCart />
      </ProductContext.Provider>
    </>
  );
}
export default CardsContainer;
