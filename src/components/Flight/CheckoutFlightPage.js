import React, { useState } from "react";
import FlightPayment from "./FlightPayment";


export default function CheckoutFlightPage() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [type, setType] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const flightId = JSON.parse(sessionStorage.getItem("flightId"));
  const details = JSON.parse(sessionStorage.getItem("flightDeatils"));
  const [modalOpen, setModalOpen] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();
    if (firstname && lastname && country && email && phone) {
      setModalOpen(true);
    } else {

      alert("Please provide all details");
    }

  };
  let totalPrice = 1678 + details.ticketPrice;

  return (
    <div className="checkout-container">
      <h3 className="heading" style={{ color: "black" }}>Review your booking</h3>
      <div className="flight-checkout-container flight-booking">
        <section className="checkout-hotel-info checkout-Flight-Info" >
          <h2>FLIGHT INFO</h2>
          <div>
            <p>{details.airline}</p>
            <h4 style={{ color: "red" }}>{details.flightID}</h4>
          </div>
          <div className="flightbookindetails">
            <span>
              <p style={{ color: "grey" }}>{details.source}</p>
              <h3>{details.departureTime}</h3>
            </span>
            <span>
              <p style={{ color: "grey" }}>Duration: {details.duration}</p>
              <p>---</p>
            </span>
            <span>
              <p style={{ color: "grey" }}>{details.destination}</p>
              <h3>{details.arrivalTime}</h3>
            </span>

          </div>
          <p>Baggage -7 Kgs (1 piece only) Cabin</p>
        </section>
        <section className="flight-price-details">
          <h1>FARE SUMMARY</h1>
          <span className="grand-total">
            <p>Base fare</p>
            <h3>₹{details.ticketPrice}</h3>
          </span>
          <span className="grand-total">
            <p>Taxes and Surcharges</p>
            <h3>₹1678</h3>
          </span>
          <span style={{ color: "#2176d1" }} className="grand-total">
            <h2>Grand Total</h2>
            <h3>₹{totalPrice}</h3>
          </span>

        </section>
      </div>
      <section className="checkout-hotel-info">
        <h2>GUEST DETAILS</h2>
        <form onSubmit={handlePayment}>
          <main className="checkout-guest">
            <div>
              <p>Title</p>
              <select name="title" onChange={(e) => setType(e.target.value)}>
                <option value="select" disabled>select</option>
                <option value="Mr" >Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
              </select>
            </div>
            <div>
              <p>First Name</p>
              <input type="text" placeholder="Enter First Name" onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div>
              <p>Last Name</p>
              <input type="text" placeholder="Enter Last Name" onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div>
              <p>Country</p>
              <input type="text" placeholder="Enter your Country" onChange={(e) => setCountry(e.target.value)} />
            </div>
          </main>
          <div id="checkoutEmail">
            <p>Email Address</p>
            <input type="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />

            <p>Mobile Number</p>
            <input type="tel" placeholder="Enter Mobile Number" pattern="[0-9]{10}" onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className="payment-button">
            <button type="submit" >Proceed To Payment Options</button>
          </div>

        </form>
      </section>

      {modalOpen && <FlightPayment details={details} total={totalPrice} flightId={flightId}
        closeModal={() => setModalOpen(false)} userDetails={{ firstname, lastname, type, country, email, phone }} />}

    </div>

  )
}