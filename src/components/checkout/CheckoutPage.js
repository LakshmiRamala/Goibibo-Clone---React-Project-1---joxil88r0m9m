
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Payment from "./Payment";


export default function CheckoutPage() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [type, setType] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message,setMessage]=useState("");
  const location = useLocation();
  const details = location.state;
  console.log(details);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlePayment = (e) => {
    e.preventDefault();
    if (firstname && lastname && type && country && email && phone) {
      handleOpenModal(); 
      setMessage("");
    } else {
      setMessage("Please provide all details");
    }
  };
  
  return (
      <div className="checkout-container"> 
    <section className="checkout-hotel-info" >
      <h2>HOTEL INFO</h2>
      <div id="checkout-hotel">
      <img src={details.hotelDetails.images[0]} width={160}
        height={200} style={{borderRadius:"12px"}}/>
        <main>
        <h1>{details.hotelDetails.name}</h1>
        <p>{details.hotelDetails.location}</p>
        <p>Rating: {details.hotelDetails.rating}</p>
        </main>
        </div>
        <section>
        <h2 style={{color:"#2176d1"}}>Room Deatils</h2>
        <div style={{display:"flex",gap:"40px"}}>
        <main>
        <p>Room Number :{details.details.roomNumber}</p>
        <p>Room Type: {details.details.roomType}</p>
        <p>Room Size: {details.details.roomSize}</p>
        <p>Price: {details.details.price}</p>
        </main>
        <main style={{color:"green"}}>
          <p>{details.details.bedDetail}</p>
          <p>{details.details.cancellationPolicy}</p>
        </main>
        </div>
        </section>
        <section style={{backgroundColor:"lightblue",padding:"20px",borderRadius:"12px",fontWeight:"500",fontSize:"20px"}}>
        <p>Price Summary</p>
        <p>Total Amount to be Paid : ₹{details.details.price}</p>
        </section>
    </section>
    <section className="checkout-hotel-info"> 
    <h2>GUEST DETAILS</h2>
    <form onSubmit={handlePayment}>
    <main className="checkout-guest">
    <div>
      <p>Title</p>
      <select name="title" onChange={(e)=>setType(e.target.value)}>
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
    <input type="tel" placeholder="Enter Mobile Number" onChange={(e)=>setPhone(e.target.value)}/>
    </div>
    <p style={{textAlign:"center"}}>{message && message}</p>
    <div className="payment-button">
    <button  type="submit" >Proceed To Payment Options</button>
    {isModalOpen && <Payment details={details} onClose={handleCloseModal} userDetails={{firstname,lastname,type,country,email,phone}}/>}
    </div>
    
    </form>
    </section>
  
    </div>
    
  )
}