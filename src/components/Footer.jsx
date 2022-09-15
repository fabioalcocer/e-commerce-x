import { BsInstagram, BsTwitter, BsFacebook, BsGithub } from 'react-icons/bs'

function Footer () {
  return (
    <footer className='container mx-auto max-w-7xl py-2 px-2 mt-auto sm:py-1'>
      <hr className='my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8' />

      <div className='md:flex md:justify-between'>
        <div>
          <h2 className='mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white'>
            Legal
          </h2>
          <ul className='text-gray-600 dark:text-gray-400'>
            <li className='mb-4'>
              <a href='#' className='hover:underline'>
                Política de Privacidad
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline'>
                Términos &amp; Condiciones
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className='my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8' />
      <div className='sm:flex sm:items-center sm:justify-between'>
        <div className='mb-5 flex space-x-6 sm:mt-0 sm:justify-center'>
          <a
            target='_blank'
            href='https://github.com/fabioalcocer/e-commerce-x'
            className='transition-colors: text-2xl text-gray-500 duration-300 hover:text-blue-500 dark:hover:text-white' rel='noreferrer'
          >
            <BsFacebook />
          </a>
          <a
            target='_blank'
            href='https://github.com/fabioalcocer/e-commerce-x'
            className='transition-colors: text-2xl text-gray-500 duration-300 hover:text-pink-500 dark:hover:text-white' rel='noreferrer'
          >
            <BsInstagram />
          </a>
          <a
            target='_blank'
            href='https://github.com/fabioalcocer/e-commerce-x'
            className='transition-colors: text-2xl text-gray-500 duration-300 hover:text-blue-400 dark:hover:text-white' rel='noreferrer'
          >
            <BsTwitter />
          </a>
          <a
            target='_blank'
            href='https://github.com/fabioalcocer/e-commerce-x'
            className='transition-colors: text-2xl text-gray-500 duration-300 hover:text-black dark:hover:text-white' rel='noreferrer'
          >
            <BsGithub />
          </a>
        </div>
        <span className='text-sm text-gray-500 dark:text-gray-400 sm:text-center'>
          © 2022{' '}
          <a
            href='https://test-ecommerce-x.netlify.app/'
            className='hover:underline'
          >
            Chiringuito™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer
