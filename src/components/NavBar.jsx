import { CartWidget } from "./CartWidget"
import { NavLink } from "react-router-dom"
import { db } from "../firebase/config"
import { useState, useEffect } from "react"
import { collection, getDocs } from "firebase/firestore";

export const NavBar = () => {

  let [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoriasRef = collection(db, "categorias");
    getDocs(categoriasRef)
      .then((res) => {
        setCategories(res.docs.map((doc) => {
          return { ...doc.data(), id: doc.id, }
        }));
      })
  }, [])
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
