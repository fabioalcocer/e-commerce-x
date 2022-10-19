import { useRef, useContext } from 'react'
import { AppContext } from '@/Context'
import Card from './Card'
import Notification from './Notification'
import SlideCart from './slider/SlideCart'
import Tags from './Tags'
import Filters from './Filters'
import Loading from './Loader'

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
      return (
        <>
          <lottie-player
            src='https://assets7.lottiefiles.com/private_files/lf30_e3pteeho.json'
            background='transparent'
            speed='1'
            style={{
              width: '100%',
              height: '300px',
              margin: '0 auto'
            }}
            loop
            autoplay
          />
          <h2 className='text-xl text-center text-slate-900 mt-4 dark:text-slate-100'>
            No hay productos disponibles para esta categoría.
          </h2>
        </>
      )
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
            {isLoading ? <Loading /> : handleLoader()}
          </div>
        </div>
      </section>
      <SlideCart />
    </>
  )
}

export default CardsContainer
