import React, { useState } from "react";
import TrainPayment from "./TrainPayment.js";


export default function CheckoutTrainPage() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [type, setType] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

 
  const details =JSON.parse( sessionStorage.getItem("trainDetails"));
  console.log(details);
  const [modalOpen, setModalOpen] = useState(false);
  
  const handlePayment = (e) => {
    e.preventDefault();
    if (firstname && lastname && country && email && phone) {
      setModalOpen(true);
    } else {
      alert("Please provide all details");
    }
    
  };
  let totalPrice=1678+details.fare;
  
  return (
      <div className="checkout-container" style={{display:window.innerWidth<768 && "flex",flexDirection:window.innerWidth<768 && "column"}}> 
      <div className="flight-checkout-container">
    <section className="checkout-hotel-info checkout-Flight-Info" style={{width:window.innerWidth<=768 &&"74%"}}>
      <h2>TRAIN INFO</h2>
      <div>
        <p>{details.airline}</p>
          <h4 style={{color:"red"}}>{details.flightID}</h4>
            </div>
            <div className="flightbookindetails">
                <span>
                    <p style={{color:"grey"}}>SOURCE: {details.source}</p>
                    <h3>Depature Time: {details.departureTime}</h3>
                </span>
                <span>
                <p style={{color:"grey"}}>Duration: {details.duration}</p>
                <p>--------------</p>
                </span>
                <span>
                    <p style={{color:"grey"}}>Destination: {details.destination}</p>
                    <h3>Arrival Time: {details.arrivalTime}</h3>
                </span>
                
      </div>
      <p>Baggage -7 Kgs (1 piece only) Cabin</p>
    </section>
    
    
    <section className="flight-price-details">
      <h1>FARE SUMMARY</h1>
      <span className="grand-total">
        <p>Base fare</p>
        <h3>₹{details.fare}</h3>
      </span>
      <span className="grand-total">
        <p>Taxes and Surcharges</p>
        <h3>₹1678</h3>
      </span>
      <span style={{color:"#2176d1"}} className="grand-total">
        <h2>Grand Total</h2>
        <h3>₹{totalPrice}</h3>
      </span>

    </section>
    </div>
   
    <section className="checkout-hotel-info" style={{width:window.innerWidth<=768 &&"74%",marginLeft:window.innerWidth<=768 && "5%"}}> 
    <h2>GUEST DETAILS</h2>
    <form onSubmit={handlePayment}>
    <main className="checkout-guest">
    <div>
      <p>Title</p>
      <select name="title" onChange={(e)=>setType(e.target.value)}>
        <option value="select" disabled>select</option>
        <option value="Mr" >Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
      </select>
    </div>
    <div>
      <p>First Name</p>
      <input type="text" placeholder="Enter First Name" onChange={(e)=>setFirstName(e.target.value)}/>
    </div>
    <div>
      <p>Last Name</p>
      <input type="text" placeholder="Enter Last Name" onChange={(e)=>setLastName(e.target.value)}/>
    </div>
    <div>
      <p>Country</p>
      <input type="text" placeholder="Enter your Country" onChange={(e)=>setCountry(e.target.value)}/>
    </div>
    </main>
    <div id="checkoutEmail">
    <p>Email Address</p>
    <input type="email" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
    
    <p>Mobile Number</p>
    <input type="tel" placeholder="Enter Mobile Number" pattern="[0-9]{10}"  onChange={(e)=>setPhone(e.target.value)}/>
    </div>
    <div className="payment-button">
    <button  type="submit" >Proceed To Payment Options</button>
    </div>
    
    </form>
    </section>
    
    {modalOpen && <TrainPayment details={details} total={totalPrice} 
    closeModal={() => setModalOpen(false)} userDetails={{firstname,lastname,type,country,email,phone}}/>}

    </div>
    
  )
}