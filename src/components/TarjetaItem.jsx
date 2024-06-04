import React from 'react';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

export const TarjetaItem = ({ producto }) => {
  return (
    <div className="producto">
      <h2>{producto.nombre}</h2>
      <div>
        <img src={producto.imagen} alt={producto.nombre} />
        <div className='info'>
          <p>{producto.descripcion}</p>
          <p>Autor: {producto.autor}</p>
          <p>${producto.precio}</p>
          <Button className='boton' variant="outline-info"><Link to={`/item/${producto.id}`} className='ver'>Ver más</Link></Button>
          
        </div>  
      </div>
      
    </div>
  );
};
