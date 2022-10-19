import { useRef, useContext } from 'react'
import { AppContext } from '@/Context'
import Card from '@/components/container/Card'
import Notification from '@/components/container/Notification'
import SlideCart from '@/components/slider/SlideCart'
import Tags from '@/components/Tags'
import Filters from '@/components/Filters'
import Loader from '@/components/container/Loader'
import EmptyCategory from '@/components/container/EmptyCategory'

function CardsContainer () {
  const { dataProducts, isLoading } = useContext(AppContext)

  const refNotification = useRef(null)

  const showNotification = () => {
    refNotification.current.style.visibility = 'visible'

    setTimeout(() => {
      refNotification.current.style.visibility = 'hidden'
    }, 2000)
  }

  const handleLoader = () => {
    if (!dataProducts.length) {
      return <EmptyCategory />
    }

    return (
      <div className='mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        <>
          {dataProducts.map((product) => (
            <Card
              key={product.id}
              product={product}
              showNotification={showNotification}
            />
          ))}
        </>
      </div>
    )
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
            {isLoading ? <Loader /> : handleLoader()}
          </div>
        </div>
      </section>
      <SlideCart />
    </>
  )
}

export default CardsContainer
