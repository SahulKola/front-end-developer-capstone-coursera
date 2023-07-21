import "./Header.scss";
import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
const Header = () => {
  const handleScroll = () => {
    const ele = document.querySelector("#about");
    if (ele) {
      ele.scrollIntoView({ behavior: "smooth" });
    }
  };
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
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/" onClick={handleScroll}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/404">Menu</Link>
              </li>
              <li>
                <Link to="/reservation">Reservation</Link>
              </li>
              <li>
                <Link to="/404">Login</Link>
              </li>
            </ul>
            <Link className="cta" to="/404">
              Order Online
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
