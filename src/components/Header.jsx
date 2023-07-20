import "./Header.scss";
import Logo from "../assets/Logo.svg";
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-wrap">
          <div className="logo">
            <a href="/">
              <img src={Logo} alt="Little Lemon Logo" />
            </a>
          </div>
          <div className="menu-items">
            <ul className="menu">
              <li>Home</li>
              <li>About</li>
              <li>Menu</li>
              <li>Reservations</li>
              <li>Login</li>
              <li className="cart-icon"></li>
            </ul>
            <div className="cta">Order Online</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
