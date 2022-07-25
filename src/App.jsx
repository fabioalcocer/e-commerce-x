import Header from "./components/Header";
import Tags from "./components/Tags";
import Details from "./components/Details";
import CardsContainer from "./components/CardsContainer";
import Filters from "./components/Filters";
import Footer from "./components/Footer";
import { AppContext } from "./Context";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [openS, setOpen] = useState(false);

  const handleCount = (products) => {
    setCount(products.length + 1);
  };

  const openSlide = () => {
    setOpen(true);
  };

  return (
    <div className="App transition-colors: bg-slate-50 duration-500 dark:bg-gray-900">
      <AppContext.Provider
        value={{ count, handleCount, openS, setOpen, openSlide }}
      >
        <main className="container mx-auto flex flex-col p-4 pt-0">
          <section className="container mx-auto max-w-7xl pr-1 md:pr-2">
            <Header />
            <Details />
            <Tags />
            <Filters />
          </section>
          <CardsContainer />
          <Footer />
        </main>
      </AppContext.Provider>
    </div>
  );
}

export default App;
