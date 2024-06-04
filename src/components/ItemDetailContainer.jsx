import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from "../data/productos.json";
import { Detail } from './Detail';

const ItemDetailContainer = () => {

    let { itemId } = useParams();
    let [producto, setProducto] = useState(undefined);

    useEffect(() => {
        setProducto(data.find((prod) => prod.id === parseInt(itemId)));
    }, [itemId])
    

  return (
    <div>{producto ? 
        (<Detail 
            nombre={producto.nombre}
            imagen={producto.imagen}
            precio={producto.precio}
            autor={producto.autor}
            descripcion={producto.descripcion}
            
            />): "Cargando..."}</div>
  )
}

export default ItemDetailContainer