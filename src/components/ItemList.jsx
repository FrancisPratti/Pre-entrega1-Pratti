import React from 'react'
import { TarjetaItem } from './TarjetaItem'

export const ItemList = ({productos}) => {

  return (
    <div className='productos-grilla'>
        {
            productos.length > 0 ?
            productos.map (producto => {
                return <TarjetaItem key={producto.id} producto={producto}/>
            })
            : <p>Cargando productos...</p>

        }
    </div>
  )
}
