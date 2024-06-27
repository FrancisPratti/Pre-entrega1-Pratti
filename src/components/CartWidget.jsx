import { useContext } from 'react';
import { Cart4 } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';


export const CartWidget = () => {

  const { calcularCantidad } = useContext(CartContext);

  return (
    <Link className="carrito" to="/carrito">
        <Cart4/> { calcularCantidad () }
    </Link>
  )
}
