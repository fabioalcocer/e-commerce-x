import { createContext, useState, useEffect } from "react";
import { getDataProducts } from "./services/data";

export const AppContext = createContext();
export const ProductContext = createContext();

export function AppContextProvider({ children }) {
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
      {children}
    </AppContext.Provider>
  );
}
