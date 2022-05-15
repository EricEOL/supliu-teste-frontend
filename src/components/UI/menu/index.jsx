import { useState } from "react";
import { Link } from "react-router-dom";
import UpdateAlbums from "../../../pages/updateAlbums/UpdateAlbums";
import './styles.css';

function Menu() {

  const [menuActive, setMenuActive] = useState(false);
  
  function activeMenu() {
    menuActive === false ? setMenuActive(true) : setMenuActive(false);
  }
  
  return (
    <div className="container-menu">

      <div className={menuActive === false ? "menu-hamburger" : "menu-hamburger is-active"} onClick={activeMenu}>
        <div className="bar"></div>
      </div>
  
      <nav className={menuActive === false ? "links" : "links is-active"}>
        <ul>
          <li>
          <Link to="/">Discografia</Link>
          </li>
          <li>
            <Link to="/updatealbums">Alterar álbuns e faixas</Link>
          </li>
          <li>
            <a href="https://www.instagram.com/tiaocarreiroepardinho/" target="_blank" rel="noreferrer">
              <img src="./assets/instagram.png" alt="instagram" />
            </a>
          </li>
        </ul>
      </nav>

    </div>
  )
}

export default Menu;