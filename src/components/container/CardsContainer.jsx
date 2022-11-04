import { useRef, useContext, useState } from 'react'
import { AppContext } from '@/Context'
import Card from '@/components/container/Card'
import Notification from '@/components/container/Notification'
import SlideCart from '@/components/slider/SlideCart'
import Tags from '@/components/Tags'
import Filters from '@/components/Filters'
import Loader from '@/components/container/Loader'

function CardsContainer () {
  const { dataProducts, isLoading } = useContext(AppContext)
  const [prev, setPrev] = useState(0)
  const [next, setNext] = useState(12)

  const productsForPage = Math.ceil(dataProducts.length / 10)

  const scrollTop = () => {
    window.scrollTo({
      top: 160,
      behavior: 'smooth'
    })
  }

  const prevPage = () => {
    if (prev === 0) return

    setPrev(prev - productsForPage)
    setNext(next - productsForPage)

    scrollTop()
  }

  const nextPage = () => {
    if (next > dataProducts.length) return
    setPrev(prev + productsForPage)
    setNext(next + productsForPage)

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
                    {dataProducts.slice(prev, next).map((product) => (
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
        <button className='transition-colors: cursor-pointer rounded-md bg-gray-200 p-2 font-semibold text-slate-800 duration-300 hover:bg-indigo-500 hover:text-slate-100 focus:bg-indigo-600 focus:text-slate-100 focus:outline-none dark:bg-slate-600 dark:text-slate-100 dark:hover:bg-indigo-500' onClick={prevPage}>
          Prev
        </button>
        <button className='transition-colors: cursor-pointer rounded-md bg-gray-200 p-2 font-semibold text-slate-800 duration-300 hover:bg-indigo-500 hover:text-slate-100 focus:bg-indigo-600 focus:text-slate-100 focus:outline-none dark:bg-slate-600 dark:text-slate-100 dark:hover:bg-indigo-500' onClick={nextPage}>
          Next
        </button>
      </div>
      <SlideCart />
    </>
  )
}

export default CardsContainer
