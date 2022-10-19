import Header from '@/components/header/Header'
import Details from '@/components/Details'
import CardsContainer from '@/components/container/CardsContainer'
import Footer from '@/components/Footer'

function App () {
  return (
    <div className='App transition-colors: min-h-screen bg-slate-50 duration-500 dark:bg-gray-900'>
      <main className='container mx-auto flex min-h-screen flex-col p-4 pt-0'>
        <div className='container mx-auto max-w-7xl pr-1 md:pr-2'>
          <Header />
          <Details />
        </div>
        <CardsContainer />
        <Footer />
      </main>
    </div>
  )
}

export default App
