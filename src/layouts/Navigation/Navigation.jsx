import { menuItems } from "../../data/menuItems";
import { getNavItemClass } from "../../utils/getNavItemClass";
import "./Navigation.scss";

import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="nav" aria-label="Меню">
      <ul className="nav__list">
        {menuItems.map(({ to, label, icon }) => (
          <NavLink key={to} to={to}>
            {({ isActive }) => (
              <li className={getNavItemClass(isActive)}>
                {icon && <img src={icon} alt="" className="nav__icon" />}
                <span className="nav__label">{label}</span>
              </li>
            )}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
