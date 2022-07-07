import './App.css'
import Card from './components/Card'
import { BiCart } from "react-icons/bi";

function App() {

  return (
    <div className="App">
      <h1 className="text-3xl font-bold text-slate-800">Hola Mundo</h1>
      <Card />
      <BiCart />
    </div>
  )
}

export default App
