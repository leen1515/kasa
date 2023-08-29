import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
/** @name components */
/**
 * header presence for all site's page with navigation's bar
 * @returns {node} header's tag
 */

function Header () {
  return <header className='home-header'>
    <Link to="/">
      <img className ="logo" src={logo} alt="Logo de Kasa" />
    </Link>
    <nav className='navigation'>
      <ul>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')}
            to="/" >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')}
            to="/about"
          >A Propos
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>;
}

export default Header;
