import { useContext, useState } from 'react'
import { AppContext } from '@/Context'

function Tags ({ setCurrentPage }) {
  const [active, setActive] = useState('Todo')
  const { filterProducts } = useContext(AppContext)

  const tags = ['Todo', 'Sudaderas', 'Poleras', 'Deportivos', 'Rompevientos', 'Calzas', 'Shorts', 'Soleras']

  const handleTags = (e, tag) => {
    setCurrentPage(1)
    filterProducts(e)
    setActive(tag)
  }
  return (
    <div className='mt-4 flex'>
      <ul className='text-md flex overflow-x-auto p-1 pl-[2px] text-center font-medium text-gray-100 mx-auto'>
        {tags.map((tag) => (
          <li
            key={tag}
            onClick={(e) => handleTags(e, tag)}
            className={`tag mr-2 inline-block rounded-3xl bg-gray-800 py-2 px-3 text-white ${
              active === tag
                ? 'bg-slate-900 text-white  dark:outline dark:outline-2 dark:outline-slate-50'
                : 'bg-gray-200 bg-opacity-70 text-black dark:bg-gray-100'
            } cursor-pointer`}
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tags
