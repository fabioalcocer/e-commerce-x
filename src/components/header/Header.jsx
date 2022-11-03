import logo from '@/assets/logo.webp'
import { useRef } from 'react'
import Navbar from './NavBar'
import '../../index.css'

function Header () {
  const headerRef = useRef(null)
  const navBarRef = useRef(null)

  let prevY = window.scrollY

  window.addEventListener('scroll', () => {
    if (prevY > window.scrollY) {
      headerRef.current.classList.remove('off')
      navBarRef.current.classList.remove('left')
    } else {
      headerRef.current.classList.add('off')
      navBarRef.current.classList.add('left')
    }
    prevY = window.scrollY
  })

  return (
    <header className='transition-colors: container sticky top-0 z-10 mx-auto justify-between bg-slate-50 py-4 pb-5 duration-500 dark:bg-gray-900 md:flex'>
      <img
        className='mx-auto mb-2 flex h-36 w-36 md:mx-0'
        ref={headerRef}
        src={logo}
        alt='logo'
      />
      <Navbar navBarRef={navBarRef} />
    </header>
  )
}

export default Header
