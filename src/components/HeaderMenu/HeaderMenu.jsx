import { NavLink } from 'react-router-dom';
import css from './headerMenu.module.css';
const HeaderMenu = () => {
  return (
    <div className={css.block}>
      <ul className={css.ul}>
        <li className={css.li}>
          <NavLink to="/" className={css.link}>
            Home
          </NavLink>
        </li>
        <li className={css.li}>
          <NavLink to="/movies" className={css.link}>
            Movies
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default HeaderMenu;
