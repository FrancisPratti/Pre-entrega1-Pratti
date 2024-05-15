import { CartWidget } from "./CartWidget"


export const NavBar = () => {
  return (
    <header>
        <h1>La Biblioteca del Goblin</h1>
        <nav>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Libros</a></li>
                <li><a href="#">Comics</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
  )
}
