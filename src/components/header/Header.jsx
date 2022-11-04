import logo from '@/assets/logo.webp'
import Navbar from './NavBar'
import { useScrollPosition } from '@/hooks/useScrollPosition'

function Header () {
  const scrollPosition = useScrollPosition()

  function classNames (...classes) {
    return classes.filter(Boolean).join(' ')
  }
  return (
    <header
      className={classNames(
        scrollPosition > 0 ? 'md:h-20 -translate-y-[157px]' : 'md:h-44',
        'transition-all: container sticky top-0 z-10 mx-auto md:-translate-y-0 items-center justify-between bg-slate-50 py-6 duration-500 dark:bg-gray-900 md:flex md:py-4'
      )}
    >
      <img
        className={classNames(
          scrollPosition > 0
            ? 'md:flex md:opacity-0'
            : 'md:opacity-100',
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
