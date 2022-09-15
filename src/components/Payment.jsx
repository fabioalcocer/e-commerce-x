import { useContext } from 'react'
import { AppContext } from '../Context.jsx'

function Payment () {
  const { setMethod } = useContext(AppContext)

  const handleMethod = (e) => {
    setMethod(e.target.value)
  }

  return (
    <div className='mt-5 flex flex-col justify-end gap-5'>
      <lottie-player
        src='https://assets8.lottiefiles.com/private_files/lf30_9kdbftpx.json'
        background='transparent'
        speed='.6'
        style={{
          width: '300px',
          height: '300px',
          margin: '0 auto'
        }}
        loop
        autoplay
      />
      <h4 className='text-xl font-medium text-gray-900 dark:text-white'>
        Elige método de pago:
      </h4>
      <div className='flex flex-col gap-3 text-gray-900 dark:text-slate-200'>
        <label onChange={handleMethod} className='flex items-center gap-2'>
          <input value='Efectivo' type='radio' name='method' />
          <span>Efectivo</span>
        </label>
        <label onChange={handleMethod} className='flex items-center gap-2'>
          <input value='Tarjeta' type='radio' name='method' />
          <span>Tarjeta</span>
        </label>
      </div>
    </div>
  )
}

export default Payment
