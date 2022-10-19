function EmptyCategory () {
  return (
    <>
      <lottie-player
        src='https://assets7.lottiefiles.com/private_files/lf30_e3pteeho.json'
        background='transparent'
        speed='1'
        style={{
          width: '100%',
          height: '300px',
          margin: '0 auto'
        }}
        loop
        autoplay
      />
      <h2 className='text-xl text-center text-slate-900 mt-4 dark:text-slate-100'>
        No hay productos disponibles para esta categoría.
      </h2>
    </>
  )
}

export default EmptyCategory
