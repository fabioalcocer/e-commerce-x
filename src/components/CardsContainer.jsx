import { useRef, useState } from "react";
import { data } from "../services/data";
import Card from "./Card";
import Notification from "./Notification";
import SlideCart from "./SlideCart";
import { ProductContext } from "../Context";

function CardsContainer() {
  const [products, setProducts] = useState([]);
  const [method, setMethod] = useState("Efectivo");

  const refNotification = useRef(null);

  const showNotification = () => {
    refNotification.current.style.visibility = "visible";

    setTimeout(() => {
      refNotification.current.style.visibility = "hidden";
    }, 2000);
  };

  return (
    <>
      <ProductContext.Provider
        value={{ products, setProducts, method, setMethod }}
      >
        <Notification refNoti={refNotification} />
        <section className="container mx-auto pb-5">
          <div className="lg:-mx-2 lg:flex">
            <div className="lg:w-5/5 mx-auto mt-6 lg:mt-0 lg:px-2 ">
              <div className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <>
                  {data.map((product) => (
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
