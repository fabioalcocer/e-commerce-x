import Header from './components/Header'
import Search from './components/Search'
import Details from './components/Details'

function App() {
  return (
    <div className="App">
      <main className="container mx-auto flex flex-col justify-center p-3 pt-0">
        <Header />
        <Search />
        <Details />
      </main>
    </div>
  );
}

export default App
