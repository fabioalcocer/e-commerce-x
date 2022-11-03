import logo from '@/assets/logo.webp'
import Navbar from './NavBar'
import { useScrollPosition } from '@/hooks/useScrollPosition'

function Header () {
  const scrollPosition = useScrollPosition()
  // console.log(scrollPosition)

  function classNames (...classes) {
    return classes.filter(Boolean).join(' ')
  }
  return (
    <header
      // className='transition-colors: container sticky top-0 z-10 mx-auto justify-between bg-slate-50 py-4 pb-5 duration-500 dark:bg-gray-900 md:flex'
      className={classNames(
        scrollPosition > 0 ? 'md:h-20' : 'md:h-44',
        'transition-colors: container sticky top-0 z-10 mx-auto items-center justify-between bg-slate-50 py-4 pb-5 duration-500 dark:bg-gray-900 md:flex'
      )}
    >
      <img
        // className='mx-auto mb-2 flex h-36 w-36 md:mx-0'
        className={classNames(
          scrollPosition > 0 ? 'md:opacity-0 md:flex hidden' : 'md:opacity-100',
          'mx-auto mb-2 flex h-36 w-36 transition-opacity duration-300 md:mx-0'
        )}
        src={logo}
        alt='logo'
      />
      <Navbar />
    </header>
  )
}

export default Header
