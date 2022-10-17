import logo from '@/assets/logo.webp'
import Navbar from './NavBar'

function Header () {
  return (
    <header className='container mx-auto max-w-7xl justify-between md:flex'>
      <img
        className='mx-auto mb-2 flex h-36 w-36 md:mx-0'
        src={logo}
        alt='logo'
      />
      <Navbar />
    </header>
  )
}

export default Header
