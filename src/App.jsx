import Header from '@/components/header/Header'
import Details from '@/components/Details'
import CardsContainer from '@/components/container/CardsContainer'
import Footer from '@/components/Footer'

function App () {
  return (
    <div className='App transition-colors: min-h-screen bg-slate-50 duration-500 dark:bg-gray-900'>
      <main className='container max-w-screen-2xl mx-auto flex min-h-screen flex-col p-4 pt-0'>
        <Header />
        <Details />
        <CardsContainer />
        <Footer />
      </main>
    </div>
  )
}

export default App
