import React, { useEffect, useState } from 'react';
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";


export const ItemListContainer = () => {
  let { categoryId } = useParams();
  let [productos, setProductos] = useState([]);


  useEffect(() => {
    const productosRef = collection(db, "productos");

    let q;
    if (categoryId) {
      q = query(productosRef, where("categoria.id", "==", categoryId));
    } else {
      q = productosRef;
    }

    getDocs(q)
      .then((res) => {
        setProductos(
          res.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
        );
      })

  }, [categoryId]);

  return (
    <>
      <div className="item-list">
        <h2 className='title'>Tu proxima lectura te espera</h2>
        <ItemList productos={productos} />
      </div>
    </>
  );
}
