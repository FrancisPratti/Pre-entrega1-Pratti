import React from 'react'

export const Detail = ({ nombre, precio, imagen, descripcion, autor }) => {
  return (
    <div className='det-back'>
        <div className='det-box'>
                <img src={imagen} alt={nombre} />
                <div className='detalles'>
                    <h3 className='nombre'>{nombre}</h3>
                    <p>{descripcion}</p>
                    <p>Autor:{autor}</p>
                    <p>Precio: ${precio}</p>  
                </div>
        </div>
    </div>
    
  )
}
