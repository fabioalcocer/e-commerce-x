import Header from "./components/Header";
import Tags from "./components/Tags";
import Details from "./components/Details";
import Cards from "./components/Cards";
import Dropdown from "./components/Dropdown";

function App() {
  return (
    <div className="App">
      <main className="container mx-auto flex h-screen flex-col p-4 pt-0">
        <Header />
        <Details />
        <Tags />
        <Dropdown />
        <Cards />
      </main>
    </div>
  );
}

export default App;
