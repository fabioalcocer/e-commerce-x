import { Fragment, useContext, useState, useMemo } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { BiXCircle } from 'react-icons/bi'
import { AppContext } from '@/Context.jsx'
import Payment from './Payment.jsx'
import ProductsCart from './ProductsCart.jsx'
import BtnWhatsapp from './BtnWhatsapp.jsx'

function SlideCart () {
  const { openS, setOpen, productsCart, setProductsCart, setCount } =
    useContext(AppContext)

  const [show, setShow] = useState(true)
  const [method, setMethod] = useState('Efectivo')

  const total = useMemo(() => {
    return productsCart.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0
    )
  }, [productsCart])

  const string =
    `Hola! Quisiera comprar los siguientes productos:\n${productsCart.map(
      (product) =>
        `·${product.quantity} ${product.name} Talla ${product.currentSize} - ${product.price}Bs.\n`
    )}\n*Método de pago: ${method}\nTOTAL: ${total}Bs.`.replaceAll(
      ',',
      ''
    )

  const finalizePurchase = () => {
    setProductsCart([])
    setCount(0)
    setShow(true)
  }

  return (
    <Transition.Root show={openS} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter='ease-in-out duration-500'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in-out duration-500'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-hidden'>
          <div className='absolute inset-0 overflow-hidden'>
            <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
              <Transition.Child
                as={Fragment}
                enter='transform transition ease-in-out duration-500 sm:duration-700'
                enterFrom='translate-x-full'
                enterTo='translate-x-0'
                leave='transform transition ease-in-out duration-500 sm:duration-700'
                leaveFrom='translate-x-0'
                leaveTo='translate-x-full'
              >
                <Dialog.Panel className='pointer-events-auto w-screen max-w-md'>
                  <div className='flex h-full flex-col overflow-y-scroll bg-white shadow-xl dark:bg-gray-900'>
                    <div className='flex-1 overflow-y-auto py-6 px-4 sm:px-5'>
                      <div className='flex h-9 items-center'>
                        <Dialog.Title className='mr-auto text-xl font-medium text-gray-900 dark:text-slate-50'>
                          Carrito de compras
                        </Dialog.Title>
                        <div className='ml-3 flex h-7 items-center'>
                          <BiXCircle
                            className='text-3xl text-slate-400'
                            onClick={() => setOpen(false)}
                          />
                        </div>
                      </div>

                      {show
                        ? (
                          <ProductsCart productsCart={productsCart} />
                          )
                        : (
                          <Payment setMethod={setMethod} />
                          )}
                    </div>

                    <footer className='border-t border-slate-700 py-6 px-4 sm:px-6'>
                      <div className='flex justify-between text-lg font-medium text-gray-900 dark:text-slate-200'>
                        <p className='font-semibold '>
                          Total a pagar
                        </p>
                        <p className='font-semibold text-emerald-600 dark:text-emerald-500'>{`${total}Bs`}</p>
                      </div>

                      {show
                        ? (
                          <button
                            onClick={() => setShow(!show)}
                            className='mt-6 flex w-full cursor-pointer items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700'
                          >
                            Completar pago
                          </button>
                          )
                        : (
                          <BtnWhatsapp
                            string={string}
                            finalizePurchase={finalizePurchase}
                          />
                          )}

                      <div className='mt-6 flex justify-center text-center text-gray-500 dark:text-gray-300'>
                        {show
                          ? (
                            <button
                              type='button'
                              className='text-lg font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-500'
                              onClick={() => setOpen(false)}
                            >
                              Sigue comprando
                            </button>
                            )
                          : (
                            <button
                              type='button'
                              className='text-lg font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-500'
                              onClick={() => setShow(!show)}
                            >
                              Volver
                            </button>
                            )}
                      </div>
                    </footer>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default SlideCart
