import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const carritoGuardado = JSON.parse(localStorage.getItem('carrito'));
    if (carritoGuardado) {
      setCarrito(carritoGuardado);
    }
  }, []);

  const agregarAlCarrito = (producto) => {
    const nuevoCarrito = [...carrito, producto];
    setCarrito(nuevoCarrito);
    localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
  }

  const calcularCantidad = () => {
    return carrito.length;
  }

  const calcularTotal = () => {
    return carrito.reduce((acc, prod) => acc + prod.precio, 0);
  }

  const vaciarCarrito = () => {
    setCarrito([]);
    localStorage.removeItem('carrito');
  }

  const eliminarProducto = (producto) => {
    const nuevoCarrito = carrito.filter(prod => prod.id !== producto.id);
    setCarrito(nuevoCarrito);
    localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
  }

  const eliminarProductoPorCantidad = (producto, cantidad) => {
    let contador = 0;
    const nuevoCarrito = carrito.filter(prod => {
      if (prod.id === producto.id && contador < cantidad) {
        contador++;
        return false;
      }
      return true;
    });
    setCarrito(nuevoCarrito);
    localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
  }

  return (
    <CartContext.Provider value={{ carrito, agregarAlCarrito, calcularCantidad, calcularTotal, vaciarCarrito, eliminarProducto, eliminarProductoPorCantidad }}>
      {children}
    </CartContext.Provider>
  );
}
