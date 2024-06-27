import { Carrito } from "./components/Carrito";
import  ItemDetailContainer   from "./components/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer"
import { NavBar } from "./components/NavBar"
import "./css/main.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContext, CartProvider } from "./context/CartContext.jsx";

function App() {

  return (

    <CartProvider>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
          <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
          <Route path="/carrito" element={<Carrito/>}/>
        </Routes>
    </BrowserRouter>
    </CartProvider>
    
      
    
  )
}

export default App
