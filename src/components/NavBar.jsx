import { CartWidget } from "./CartWidget"
import categories from "../data/categorias.json"
import { NavLink } from "react-router-dom"

export const NavBar = () => {
  return (
    <header>
        <NavLink to="/">
          <div>
          <img src="/assets/img/logo.png" alt="" />
          <h1>Biblioteca del Goblin</h1>
          </div>
          
        </NavLink>
        <nav>
        <ul>
            <li className="nav-item">
              <NavLink to="/" activeclassname="active" className="nav-link">Inicio</NavLink>
            </li>
            {
              categories.map((category) => {
                  return (
                    <li className="nav-item" key={category.id}>
                      <NavLink to={`/category/${category.id}`} activeclassname="active" className="nav-link">
                        {category.nombre}
                      </NavLink>
                    </li>
                  )
              })
            }
        </ul>
        </nav>
        <CartWidget/>
    </header>
  )
}
