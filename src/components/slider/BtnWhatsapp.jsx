import { BsWhatsapp } from 'react-icons/bs'

function BtnWhatsapp ({ string, finalizePurchase }) {
  return (
    <button onClick={finalizePurchase} className='mt-6 w-full'>
      <a
        target='_blank'
        href={`https://wa.me/59170767393?text=${encodeURIComponent(
          string
        )}`}
        className='transition-colors: flex items-center justify-center gap-1 rounded-md border border-transparent bg-emerald-500 px-6 py-3 text-base font-semibold text-white shadow-sm duration-300 hover:bg-emerald-700'
        rel='noreferrer'
      >
        <BsWhatsapp className='text-xl' />
        Whatsapp
      </a>
    </button>
  )
}

export default BtnWhatsapp
