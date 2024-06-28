import React from 'react';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { CartContext } from '../context/CartContext.jsx'
import { useContext } from 'react'

export const TarjetaItem = ({ producto }) => {

  const {agregarAlCarrito } = useContext (CartContext)

  return (
    <div className="producto">
        <img src={producto.imagen} alt={producto.nombre} />
        <div className='info'>
          <h2>{producto.nombre}</h2>
          <p>Autor: {producto.autor}</p>
          <p>${producto.precio}</p>
          <div className='botones'>
            <Button className='boton' variant="outline-info"><Link to={`/item/${producto.id}`} className='ver'>Ver más</Link></Button>
            <Button onClick={() => agregarAlCarrito(producto)} className='boton' variant="outline-info">Añadir al carrito</Button>
          </div>
        </div>       
    </div>
  );
};
