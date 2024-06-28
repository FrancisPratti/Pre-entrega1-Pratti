import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Detail } from './Detail';
import { db } from '../firebase/config';
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {

    let { itemId } = useParams();
    let [producto, setProducto] = useState();
    let [loading, setLoading] = useState(true);


    useEffect(() => {

      const docRef = doc(db, "productos", itemId);
      getDoc(docRef)
        .then(res => {
          if (res.data()) {
            setProducto( { ...res.data(), id: res.id } );
          }
          setLoading(false);
        })
      
    }, [itemId]);
    
    if (loading) {
      return <div>Cargando...</div>
    } else if (producto) {
      return <Detail
          producto={producto} 
          nombre={producto.nombre}
          imagen={producto.imagen}
          precio={producto.precio}
          autor={producto.autor}
          descripcion={producto.descripcion}
            />
    } else {
      return <div>Producto no encontrado</div>
    }
}

export default ItemDetailContainer