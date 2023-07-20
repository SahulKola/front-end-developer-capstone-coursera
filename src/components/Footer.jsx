import "./Footer.scss";
import footerLogo from "../assets/footer-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-wrap">
          <div className="footer-logo">
            <img src={footerLogo} alt="Little Lemon Logo" />
          </div>
          <div className="footer-items">
            <h3>Quick Links</h3>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Menu</li>
              <li>Reservations</li>
              <li>Order Online</li>
              <li>Login</li>
            </ul>
          </div>
          <div className="footer-items">
            <h3>Contact</h3>
            <p>
              <i>
                <FontAwesomeIcon icon={faLocationDot} />
              </i>
              676 Lincoln Drive, East Petersburg, Pennsylvania.
            </p>
            <p>
              <i>
                <FontAwesomeIcon icon={faPhone} />
              </i>
              717-581-9777
            </p>
            <p>
              <i>
                <FontAwesomeIcon icon={faEnvelope} />
              </i>
              contact@littlelemon.com
            </p>
            <div className="div"></div>
          </div>
          <div className="footer-items">
            <h3>Connect with us</h3>
            <div className="socials">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
