import "./HeroSection.scss";
import HeroImage from "../assets/restauranfood.jpg";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <section className="hero-section-wrap">
          <div className="text-content">
            <h2 className="title">Little Lemon</h2>
            <h3 className="sup-script">India</h3>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
              excepturi non explicabo vitae. Cupiditate praesentium in
              distinctio maiores ipsam ea.
            </p>
            <Link className="cta" to="/reservation">
              Reserve a table
            </Link>
          </div>
          <div className="image-wrap">
            <img src={HeroImage} alt="Restaurant Food Platter" loading="lazy" />
          </div>
        </section>
      </div>
    </section>
  );
};

export default HeroSection;
