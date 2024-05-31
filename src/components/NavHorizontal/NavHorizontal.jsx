import style from './style.module.scss';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

export const NavHorizontal = () => {
  return (
    <div className={style.nav_horizontal}>
      <img
        src={logo}
        alt="SportSee"
        className={style.nav_horizontal__picture}
      />
      <nav className={style.nav_horizontal__nav}>
        <ul className={style.nav_horizontal__nav__list}>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <a href="#">Profil</a>
          </li>
          <li>
            <a href="#">Réglages</a>
          </li>
          <li>
            <a href="#">Comunauté</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
