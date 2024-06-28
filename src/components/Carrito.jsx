import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export const Carrito = () => {
  const { carrito, calcularTotal, vaciarCarrito, eliminarProductoPorCantidad } = useContext(CartContext);

  const contarProductos = (carrito) => {
    const conteo = {};
    carrito.forEach((prod) => {
      if (conteo[prod.id]) {
        conteo[prod.id].cantidad += 1;
      } else {
        conteo[prod.id] = { ...prod, cantidad: 1 };
      }
    });
    return Object.values(conteo);
  };

  const productosContados = contarProductos(carrito);

  return (
    <div className='cart'>
      <div className='cart-list'>
      {productosContados.map((prod) => (
        <div key={prod.id}>
          <h2>
            {prod.nombre}: ${prod.precio} x {prod.cantidad}
          </h2>
          <Button onClick={() => eliminarProductoPorCantidad(prod, 1)}>Eliminar 1</Button>
          <Button onClick={() => eliminarProductoPorCantidad(prod, prod.cantidad)}>Eliminar todos</Button>
        </div>
      ))}
      {carrito.length > 0 ? (
        <>
          <h2>Total: ${calcularTotal()}</h2>
          <div className='botones'>
            <Button onClick={vaciarCarrito} className='vaciar'>Vaciar carrito</Button>
            <Button className='fin'><Link to={'/checkout'} className='fin-link'>Finalizar compra</Link></Button>
          </div>
          
          
        </>
      ) : (
        <h2>Tu carrito está vacío 😕</h2>
      )}
      </div>

    </div>
  );
};
