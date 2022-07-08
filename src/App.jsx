import Header from './components/Header'
import Search from './components/Search'
import Tags from './components/Tags'
import Details from './components/Details'
import Filters from './components/Filters'

function App() {
  return (
    <div className="App">
      <main className="h-screen container mx-auto flex flex-col p-3 pt-0">
        <Header />
        <Search />
        <Details />
        <Tags />
        <Filters />
      </main>
    </div>
  );
}

export default App
