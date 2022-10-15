import { useState, useContext } from 'react'
import { AppContext } from '../../Context'
import { HiMinusCircle, HiPlusCircle } from 'react-icons/hi'

function ProductsCart ({ productsCart }) {
  const { setProductsCart, setCount } = useContext(AppContext)
  const [quantity, setQuantity] = useState(1)

  const handleRemoveBtn = (id) => {
    setCount(productsCart.length - 1)
    setProductsCart(productsCart.filter((product) => product.id !== id))
  }

  const reduceQuantity = (product) => {
    if (product.quantity <= 1) {
      return quantity
    }
    setQuantity(product.quantity--)
    setProductsCart([...productsCart])
  }

  const increaseQuantity = (product) => {
    setQuantity(product.quantity++)
    setProductsCart([...productsCart])
  }

  return (
    <div className='mt-8'>
      <div className='flow-root'>
        <ul
          role='list'
          className='-my-6 divide-y divide-slate-300 dark:divide-slate-600'
        >
          {productsCart.map((product) => (
            <li key={product._id} className='flex py-6'>
              <div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-slate-300 dark:border-slate-600'>
                <img
                  src={product.imageSrc}
                  className='h-full w-full object-cover object-center'
                />
              </div>

              <div className='ml-4 flex flex-1 flex-col'>
                <div>
                  <div className='flex justify-between text-lg font-semibold text-gray-900 dark:text-slate-200'>
                    <h3>{product.name}</h3>
                    <p className='ml-4 font-semibold text-emerald-600 dark:text-emerald-500'>
                      {`${product.price * product.quantity}Bs`}
                    </p>
                  </div>
                  <p className='mt-2 flex items-center gap-2 text-base text-gray-500 dark:text-gray-200 md:text-base'>
                    Cantidad:
                    <HiMinusCircle
                      className='cursor-pointer text-xl text-indigo-600'
                      onClick={() => reduceQuantity(product)}
                    />
                    {product.quantity}
                    <HiPlusCircle
                      className='cursor-pointer text-xl text-indigo-600'
                      onClick={() => increaseQuantity(product)}
                    />
                  </p>
                </div>
                <div className='mt-2 flex flex-1 flex-wrap items-end justify-between'>
                  <p className='mt-0 text-base capitalize text-gray-500 dark:text-gray-300'>
                    Talla:{' '}
                    <span className='font-bold text-black dark:text-white'>
                      {product.currentSize}
                    </span>
                  </p>
                  <button
                    onClick={() => handleRemoveBtn(product.id)}
                    type='button'
                    className='mt-1 rounded-md bg-indigo-500 p-1 text-sm font-semibold text-white transition-colors duration-300 hover:bg-indigo-400 sm:text-base'
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProductsCart
