import { useRef } from "react";
import { data as products } from "../services/data";
import Notification from "./Notification";
import Card from "./Card";

function CardsContainer() {
  const refNotification = useRef(null);

  const showNotification = () => {
    refNotification.current.style.visibility = "visible"

    setTimeout(() => {
      refNotification.current.style.visibility = "hidden"
  
    }, 3000);
    
  }

  return (
    <>
      <Notification refNoti={refNotification} />
      <section className="container mx-auto pb-5">
        <div className="lg:-mx-2 lg:flex">
          <div className="lg:w-5/5 mx-auto mt-6 lg:mt-0 lg:px-2 ">
            <div className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <>
                {products.map((product) => (
                  <Card key={product.id} product={product} showNotification={showNotification} />
                ))}
              </>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CardsContainer;
