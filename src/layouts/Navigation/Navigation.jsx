import { menuItems } from "../../data/menuItems";
import { getNavLinkClass } from "../../utils/getNavLinkClass";
import "./Navigation.scss";

import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="nav" aria-label="Меню">
      <ul className="nav__list">
        {menuItems.map(({ to, label, icon }) => (
          <li className="nav__item" key={to}>
            <NavLink to={to} className={getNavLinkClass}>
              {icon && <img src={icon} alt="" className="nav__icon" />}
              <span className="nav__label"> {label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
