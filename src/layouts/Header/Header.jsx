import { NavLink } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/logo.webp";

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner container">
           <a href="/" className="header__logo-link" aria-label="На главную">
          <img
            className="header__logo"
            src={logo}
            alt="Логотип компании"
            loading="eager"
            width="164"
            height="32"
          />
        </a>

      
      </div>
    </header>
  );
};

export default Header;
