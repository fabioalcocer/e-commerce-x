function Sizes ({ product }) {
  const createSize = (size) => {
    product.currentSize = size
  }

  return (
    <div className='flex justify-start gap-2'>
      {product.sizes.map((_size) => (
        <button
          onClick={() => createSize(_size)}
          key={_size}
          className='transition-colors: cursor-pointer rounded-md bg-gray-200 px-2 py-1 font-semibold text-slate-800 duration-300 hover:bg-indigo-500 hover:text-slate-100 focus:bg-indigo-600 focus:text-slate-100 focus:outline-none dark:bg-slate-600 dark:text-slate-100 dark:hover:bg-indigo-500 dark:focus:bg-indigo-700'
        >
          <span className='  '>{_size}</span>
        </button>
      ))}
    </div>
  )
}

export default Sizes
