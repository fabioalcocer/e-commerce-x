import { useContext, useState } from 'react'
import { AppContext } from '@/Context'
import SlideCart from '@/components/slider/SlideCart'
import Tags from '@/components/Tags'
import Filters from '@/components/Filters'
import { Pagination } from 'flowbite-react'
import ProductsList from './ProductsList'

function CardsContainer () {
  const { dataProducts, isLoading } = useContext(AppContext)
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 12
  const totalPages = Math.ceil(dataProducts.length / productsPerPage)

  const scrollTop = () => {
    window.scrollTo({
      top: 160,
      behavior: 'smooth'
    })
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
    scrollTop()
  }

  return (
    <div>
      <div className='container mx-auto max-w-7xl'>
        <Tags setCurrentPage={setCurrentPage} />
        <Filters />
      </div>

      <ProductsList
        dataProducts={dataProducts}
        isLoading={isLoading}
        currentPage={currentPage}
      />

      <div className='mt-8 flex justify-center gap-4'>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          showIcons
          className='pg-btn flex overflow-auto'
        />
      </div>

      <SlideCart />
    </div>
  )
}

export default CardsContainer
