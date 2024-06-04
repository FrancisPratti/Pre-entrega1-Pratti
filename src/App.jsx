import  ItemDetailContainer   from "./components/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer"
import { NavBar } from "./components/NavBar"
import "./css/main.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer/>}></Route>
          <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
        </Routes>
    </BrowserRouter>
      
    
  )
}

export default App
