import "./Reservation.scss";
import Image from "../assets/restaurant.jpg";
const Reservation = () => {
  return (
    <section className="reservation">
      <div className="container">
        <section className="reservation-wrap">
          <div className="form-wrap">
            <h2>Reservations</h2>
            <form action="/confirmed">
              <section className="booking-details">
                <h3>Personal Details</h3>
                <input
                  type="text"
                  name="Occassion"
                  id="occassion"
                  placeholder="Occassion"
                  required
                  maxLength="10"
                />
                <input type="date" name="date" id="date" required />
                <input
                  type="number"
                  name="number"
                  id="number"
                  min="2"
                  max="20"
                  placeholder="No of Guests"
                  required
                />
                <input type="time" name="time" id="time" required />
              </section>
              <section className="booking-details">
                <h3>Booking Details</h3>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  maxLength="30"
                  required
                  placeholder="Full Name"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="E-mail Id"
                  maxLength="30"
                />
                <input
                  type="text"
                  name="mobile"
                  id="mobile"
                  minLength="5"
                  maxLength="10"
                  placeholder="(+91) Mobile Number"
                  required
                />{" "}
                <input
                  type="text"
                  name="request"
                  id="request"
                  placeholder="Special Request ?"
                />
              </section>
              <button type="submit">Confirm Reservation</button>
            </form>
          </div>
          <div className="img-wrap">
            <img src={Image} alt="Restaurant" />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Reservation;
