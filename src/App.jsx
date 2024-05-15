import { ItemListContainer } from "./components/ItemListContainer"
import { NavBar } from "./components/NavBar"
import "./css/main.scss"

function App() {

  const greeting = "Proximamente tendras nuestros productos disponibles";

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting= {greeting} />
    </>
  )
}

export default App
