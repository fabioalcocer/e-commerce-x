import Header from "./components/Header";
import Details from "./components/Details";
import CardsContainer from "./components/CardsContainer";
import Footer from "./components/Footer";
import { AppContext } from "./Context";
import { useState, useEffect } from "react";
import { getDataProducts } from "./services/data";

function App() {
  const [count, setCount] = useState(0);
  const [openS, setOpen] = useState(false);
  const [dataProducts, setDataProducts] = useState([]);
  const [dataInitial, setDataInitial] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getDataProducts()
      .then((data) => {
        setDataProducts(data);
        setDataInitial(data);
      })
      .then(() => setIsLoading(false))
      .catch((err) => console.log(err));
  }, []);

  const handleCount = (products) => {
    setCount(products.length + 1);
  };

  const openSlide = () => {
    setOpen(true);
  };

  return (
    <div className="App transition-colors: min-h-screen bg-slate-50 duration-500 dark:bg-gray-900">
      <AppContext.Provider
        value={{
          count,
          handleCount,
          openS,
          setOpen,
          openSlide,
          dataProducts,
          setDataProducts,
          dataInitial,
          isLoading,
        }}
      >
        <main className="container mx-auto flex min-h-screen flex-col p-4 pt-0">
          <section className="container mx-auto max-w-7xl pr-1 md:pr-2">
            <Header />
            <Details />
          </section>
          <CardsContainer />
          <Footer />
        </main>
      </AppContext.Provider>
    </div>
  );
}

export default App;
