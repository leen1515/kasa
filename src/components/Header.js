import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Header () {
  return <>
    <Link to="/">
          <img src={logo} alt="Logo de Kasa" />
        </Link>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/" >
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
              >à propos
              </NavLink>
            </li>
          </ul>
        </nav>
    </>;
}

export default Header;
