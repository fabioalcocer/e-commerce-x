import Header from "./components/Header";
import Tags from "./components/Tags";
import Details from "./components/Details";
import CardsContainer from "./components/CardsContainer";
import Dropdown from "./components/Dropdown";
import StockToggle from "./components/StockToggle";

function App() {
  return (
    <div className="App">
      <main className="container mx-auto flex flex-col p-4 pt-0">
        <Header />
        <Details />
        <Tags />
        <Dropdown />
        <StockToggle />
        <CardsContainer />
      </main>
    </div>
  );
}

export default App;
