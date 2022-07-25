import Header from "./components/Header";
import Tags from "./components/Tags";
import Details from "./components/Details";
import CardsContainer from "./components/CardsContainer";
import Filters from "./components/Filters";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App transition-colors: bg-slate-50 duration-500 dark:bg-gray-900">
      <main className="container mx-auto flex flex-col p-4 pt-0">
        <section className="container mx-auto max-w-7xl pr-1 md:pr-2">
          <Header />
          <Details />
          <Tags />
          <Filters />
        </section>
        <CardsContainer />
        <Footer />
      </main>
    </div>
  );
}

export default App;
