import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext.jsx'


export const Detail = ({ producto, nombre, precio, imagen, descripcion, autor }) => {
  console.log (producto);
  const {agregarAlCarrito } = useContext (CartContext)
  
  return (
    <div className='det-back'>
        <div className='det-box'>
                <img src={imagen} alt={nombre} />
                <div className='detalles'>
                    <h3 className='nombre'>{nombre}</h3>
                    <p>{descripcion}</p>
                    <p>Autor:{autor}</p>
                    <p>Precio: ${precio}</p>  
                    <button onClick={() => agregarAlCarrito(producto)}>Añadir al carrito</button>
                </div>
        </div>
    </div>
    
  )
}
