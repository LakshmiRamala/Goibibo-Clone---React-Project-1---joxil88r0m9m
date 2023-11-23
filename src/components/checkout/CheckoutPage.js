import React, { useState } from "react";
import Payment from "./Payment";


export default function CheckoutPage() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [type, setType] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

 
  const details =JSON.parse( sessionStorage.getItem("details"));
  const hotelDetails=JSON.parse(sessionStorage.getItem("hotelDetails"));
  const [modalOpen, setModalOpen] = useState(false);
  console.log(details,hotelDetails);

 

  const handlePayment = (e) => {
    e.preventDefault();
    if (firstname && lastname && country && email && phone) {
      setModalOpen(true);
    } else {
     
      alert("Please provide all details");
    }
    
  };
  let total=1678+details.price;
  
  return (
      <div className="checkout-container"> 
      <div className="flight-checkout-container">
        
    <section className="checkout-hotel-info hotelFinal" >
      <h2>HOTEL INFO</h2>
      <div id="checkout-hotel">
      <img src={hotelDetails.images[0]} width={160}
        height={200} style={{borderRadius:"12px"}}/>
        <main>
        <h1>{hotelDetails.name}</h1>
        <p>{hotelDetails.location}</p>
        <p>Rating: {hotelDetails.rating}</p>
        </main>
        </div>
        <section>
        <h2 style={{color:"#2176d1"}}>Room Deatils</h2>
        <div className="chechout-room">
        <main className="checkout-room-details">
        <p>Room Number :{details.roomNumber}</p>
        <p>Room Type: {details.roomType}</p>
        <p>Room Size: {details.roomSize}</p>
        <p>Price: {details.price}</p>
        </main>
        <main style={{color:"green"}}>
          <p>{details.bedDetail}</p>
          <p>{details.cancellationPolicy}</p>
        </main>
        </div>
        </section>
    </section>
     <section className="flight-price-details">
      <h1>FARE SUMMARY</h1>
      <span className="grand-total">
        <p>Base fare</p>
        <h3>₹{details.price}</h3>
      </span>
      <span className="grand-total">
        <p>Taxes and Surcharges</p>
        <h3>₹1678</h3>
      </span>
      <span style={{color:"#2176d1"}} className="grand-total">
        <h2>Grand Total</h2>
        <h3>₹{total}</h3>
      </span>

    </section>
    </div>
    <section className="checkout-hotel-info"> 
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
    <input type="tel" placeholder="Enter Mobile Number" pattern="[0-9]{10}" onChange={(e)=>setPhone(e.target.value)}/>
    </div>
    <div className="payment-button">
    <button  type="submit" >Proceed To Payment Options</button>
    </div>
    
    </form>
    </section>
    
    {modalOpen && <Payment details={details} hotelDetails=
    {hotelDetails} total={total} closeModal={() => setModalOpen(false)} userDetails={{firstname,lastname,type,country,email,phone}}/>}

    </div>
    
  )
}