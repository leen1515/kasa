import { NavLink } from 'react-router-dom';
import logoLight from '../../assets/logo-light.png';

function Footer () {
  return <footer className='main-footer'>
    <NavLink to="/">
          <img src={logoLight} alt="Logo de Kasa" />
        </NavLink>
        <p>2023 Kasa. Tous droits réservés</p>
    </footer>;
}

export default Footer;
