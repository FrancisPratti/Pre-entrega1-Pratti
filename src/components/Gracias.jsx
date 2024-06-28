import React from 'react';
import { useLocation } from 'react-router-dom';

export const Gracias = () => {
  const location = useLocation();
  const { orderId } = location.state || {};

  return (
    <div className='tnx'>
      <div className='tnx-card'>
        <img src="/assets/img/graciasgoblin.jpg" alt="" />
        <h1>¡Gracias por tu compra!</h1>
        <p>Tu pedido ha sido confirmado y se está procesando.</p>
        {orderId && <p>ID de la compra: {orderId}</p>}
      </div>
    </div>
  );
};
