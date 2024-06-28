import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { db } from '../firebase/config';
import { collection, addDoc } from "firebase/firestore"; 
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export const Checkout = () => {
  const { carrito, calcularTotal, vaciarCarrito } = useContext(CartContext);
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const total = calcularTotal();

    const order = {
      comprador: { nombre, email },
      items: carrito,
      total: total,
      fecha: new Date().toISOString()
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      console.log("Order ID: ", docRef.id);
      vaciarCarrito();
      navigate('/fin', { state: { orderId: docRef.id } });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className='check'>
      <div className='check-info'>
        <h2>Ultimo paso antes de terminar tu compra:</h2>
        <img src="/assets/img/herogoblin.jpg" alt="" />
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre:</label>
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <Button type="submit" className='boton'>Confirmar Compra</Button>
        </form>
      </div>
    </div>
  );
};
