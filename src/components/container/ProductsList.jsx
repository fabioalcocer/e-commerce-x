import { useRef } from 'react'
import Loader from '@/components/container/Loader'
import Product from '@/components/container/Product'
import Notification from '@/components/container/Notification'

function ProductsList ({ isLoading, dataProducts, currentPage }) {
  const refNotification = useRef(null)
  const dataProductsReversed = [...dataProducts].reverse()

  const showNotification = () => {
    refNotification.current.style.visibility = 'visible'

    setTimeout(() => {
      refNotification.current.style.visibility = 'hidden'
    }, 2000)
  }

  return (
    <>
      <Notification refNoti={refNotification} />

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
                    {dataProductsReversed
                      .slice((currentPage - 1) * 12, currentPage * 12)
                      .map((product) => (
                        <Product
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
    </>
  )
}

export default ProductsList
