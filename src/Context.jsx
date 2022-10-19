import { createContext, useState, useEffect } from 'react'
import useLocalStorage from './hooks/useLocalStorage'
import { getDataProducts } from './services/data'

export const AppContext = createContext()
export const ProductContext = createContext()

export function AppContextProvider ({ children }) {
  const [count, setCount] = useLocalStorage('count', 0)
  const [openS, setOpen] = useState(false)
  const [dataProducts, setDataProducts] = useState([])
  const [dataInitial, setDataInitial] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const [productsCart, setProductsCart] = useLocalStorage(
    'products',
    []
  )

  useEffect(() => {
    getDataProducts()
      .then((data) => {
        setDataProducts(data)
        setDataInitial(data)
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false))
  }, [])

  const filterProducts = (e) => {
    setDataProducts(dataInitial)

    if (e.target.innerText === 'Todo') return

    setDataProducts((dataProducts) =>
      dataProducts.filter(
        (product) => product.category === e.target.innerText
      )
    )
  }

  return (
    <AppContext.Provider
      value={{
        count,
        setCount,
        openS,
        setOpen,
        dataProducts,
        setDataProducts,
        dataInitial,
        filterProducts,
        productsCart,
        setProductsCart,
        isLoading
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
