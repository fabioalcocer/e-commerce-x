import { useRef, useContext, useState } from 'react'
import { AppContext } from '@/Context'
import Card from '@/components/container/Card'
import Notification from '@/components/container/Notification'
import SlideCart from '@/components/slider/SlideCart'
import Tags from '@/components/Tags'
import Filters from '@/components/Filters'
import Loader from '@/components/container/Loader'
import { Pagination } from 'flowbite-react'

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

  const refNotification = useRef(null)

  const showNotification = () => {
    refNotification.current.style.visibility = 'visible'

    setTimeout(() => {
      refNotification.current.style.visibility = 'hidden'
    }, 2000)
  }

  return (
    <>
      <Notification refNoti={refNotification} />
      <section className='container mx-auto max-w-7xl'>
        <Tags />
        <Filters />
      </section>
      <section className='container mx-auto flex min-h-[50vh] items-center justify-center pb-5'>
        <div className='lg:-mx-2 lg:flex'>
          <div className='lg:w-5/5 mx-auto mt-6 lg:mt-0 lg:px-2 '>
            {isLoading
              ? (
                <Loader />
                )
              : (
                <div className='mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                  <>
                    {dataProducts.slice((currentPage - 1) * 12, currentPage * 12).map((product) => (
                      <Card
                        key={product._id}
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

      <div className='mt-8 flex justify-center gap-4'>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          showIcons
          className='flex overflow-auto'
        />
      </div>

      <SlideCart />
    </>
  )
}

export default CardsContainer
