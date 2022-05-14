import { useState } from "react";
import "./styles.css";

function Menu() {

  const [menuActive, setMenuActive] = useState(false);
  
  function activeMenu() {
    menuActive === false ? setMenuActive(true) : setMenuActive(false);
  }
  
  return (
    <div className="menu">

      <div className={menuActive === false ? "menu-hamburger" : "menu-hamburger is-active"} onClick={activeMenu}>
        <div className="bar"></div>
      </div>
  
      <nav className={menuActive === false ? "links" : "links is-active"}>
        <ul>
          <li>
            <a href="#curso">Discografia</a>
          </li>
          <li>
            <a href="#mentoria">Mentoria 2 meses</a>
          </li>
          <li>
            <a href="https://www.instagram.com/alfa11.assessoria/?hl=pt-br" target="_blank" rel="noreferrer">
              <img src="./assets/instagram.png" alt="instagram" />
            </a>
          </li>
        </ul>
      </nav>

    </div>
  )
}

export default Menu;