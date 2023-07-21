import GreekSalad from "../assets/greek salad.jpg";
import LemonDesert from "../assets/lemon dessert.jpg";
import Bruchetta from "../assets/bruchetta.svg";
import { ReactComponent as ScooterSVG } from "../assets/scooter.svg";
import { Link } from "react-router-dom";
import "./SpecialsMenu.scss";
const SpecialsMenu = () => {
  return (
    <section className="special-menu">
      <div className="container">
        <section className="special-menu-wrap">
          <div className="heading">
            <p className="title">This week specials!</p>
            <Link className="cta" to="/404">
              Online Menu
            </Link>
          </div>
          <div className="flex-items">
            <div className="flex-item">
              <div className="img-wrap">
                <img src={GreekSalad} alt="Greek Salad" />
              </div>
              <div className="content-wrap">
                <div className="heading">
                  <p className="title">GreekSalad.</p>
                  <p className="price">Rs. 180/-</p>
                </div>
                <p className="desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  veritatis vitae dignissimos totam voluptate tenetur illo sed
                  itaque, quos magnam voluptatibus, optio sequi dicta sapiente?
                  Quos, voluptatum sunt. Expedita, quaerat?
                </p>
                <p className="bottom-text">
                  Order a Delivery
                  <i>
                    <ScooterSVG />
                  </i>
                </p>
              </div>
            </div>
            <div className="flex-item">
              <div className="img-wrap">
                <img src={Bruchetta} alt="Bruchetta" />
              </div>
              <div className="content-wrap">
                <div className="heading">
                  <p className="title">Bruchetta</p>
                  <p className="price">Rs. 220/-</p>
                </div>
                <p className="desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  veritatis vitae dignissimos totam voluptate tenetur illo sed
                  itaque, quos magnam voluptatibus, optio sequi dicta sapiente?
                  Quos, voluptatum sunt. Expedita, quaerat?
                </p>
                <p className="bottom-text">
                  Order a Delivery
                  <i>
                    <ScooterSVG />
                  </i>
                </p>
              </div>
            </div>
            <div className="flex-item">
              <div className="img-wrap">
                <img src={LemonDesert} alt="Lemon Desert" />
              </div>
              <div className="content-wrap">
                <div className="heading">
                  <p className="title">LemonDesert</p>
                  <p className="price">Rs . 200/-</p>
                </div>
                <p className="desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  veritatis vitae dignissimos totam voluptate tenetur illo sed
                  itaque, quos magnam voluptatibus, optio sequi dicta sapiente?
                  Quos, voluptatum sunt. Expedita, quaerat?
                </p>
                <p className="bottom-text">
                  Order a Delivery
                  <i>
                    <ScooterSVG />
                  </i>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default SpecialsMenu;
