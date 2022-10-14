import { AppContext } from '../../Context'
import { useState, useEffect, useContext } from 'react'
import { BiSearch } from 'react-icons/bi'

function SearchBar () {
  const { dataInitial, setDataProducts } = useContext(AppContext)
  const [search, setSearch] = useState('')

  useEffect(() => {
    !search.trim()
      ? setDataProducts(dataInitial)
      : setDataProducts(productsSearch)
  }, [search])

  const productsSearch = dataInitial.filter((product) =>
    product.name.toLowerCase().includes(search)
  )

  return (
    <>
      <BiSearch className='absolute left-2 top-1/2 mt-0.5 -translate-y-1/2 transform text-2xl text-gray-500 lg:mt-0' />
      <input
        onChange={(e) => setSearch(e.target.value)}
        className='h-10 w-full rounded-3xl border-2 border-slate-300 bg-white px-10 pr-5 text-sm font-semibold
        focus:border-slate-600 focus:outline-none focus:ring-0 dark:border-slate-500 dark:bg-slate-800
        dark:text-slate-200 dark:placeholder-slate-300 dark:focus:border-gray-400 md:w-auto'
        type='search'
        name='search'
        placeholder='Buscar'
      />
    </>
  )
}

export default SearchBar
