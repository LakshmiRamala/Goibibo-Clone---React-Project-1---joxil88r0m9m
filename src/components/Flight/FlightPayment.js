import React, { useState } from "react";
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';

export default function FlightPayment({ details,total, closeModal,userDetails }) {
     const [upipay,setUpipay]=useState(false);
     const [creadit,setCredit]=useState(false);
     const [cardnum,setcardnum]=useState("");
     const [name,setName]=useState("");
     const [cvv,setCvv]=useState("");
     const [exp,setexp]=useState("");
     const [bankname,setbankname]=useState("");
     const [account,setaccount]=useState("");
     const [holdername,setholdername]=useState("");
     const [ifsc,setIfsc]=useState("");
     const [net,setNet]=useState(false);
     const isMobile = useMediaQuery({ maxWidth: 768 });
     const [upiid,setUpiid]=useState("");
     const [upipin,setUpipin]=useState("");
     const navigate=useNavigate();
     const handleNetPayment = () => {
          if (bankname && account && holdername && ifsc) {
            alert("Booking Success!!");
            if(!isMobile){
               navigate("/flights");
               }
               else{
                  navigate("/");
               }
          } else {
            alert("Please provide all details");
          }
        };
     const handlecreaditpayment=()=>{
           const currentDate = new Date();
    const expiration = new Date(exp);
    
    if (expiration < currentDate) {
        alert("Please select a future expiration date.");
        return;
    }
          if(name && cardnum && cvv && exp){
               alert("Booking Success!!");
               if(!isMobile){
                    navigate("/flights");
                    }
                    else{
                       navigate("/");
                    }
          }
          else{
               alert("Please provide all details");
          }
     }
     const handleupipayment=()=>{
          if(upiid && upipin){
               alert("Booking Success!!");
               if(!isMobile){
                    navigate("/flights");
                    }
                    else{
                       navigate("/");
                    }
          }
          else{
               alert("Please provide all details");
          }
     }
  return (
    <div className="modal-container">
      <div className="payment-content">
        <span className="close" onClick={closeModal}>
        <span>x</span>
        </span>
        <h1 style={{color:"#fc6203"}}>Pay ₹ {total} to confirm booking</h1>
        <div className="payment-user">
            <h2>{details.flightID}</h2>
            <p>{details.source}</p>
            <section>
                <p> <PersonIcon/> {userDetails.firstname}  {userDetails.lastname}</p>
                <p><EmailIcon/> {userDetails.email}</p>
                <p><CallIcon/> {userDetails.phone}</p>
            </section>

        </div>
        
        <div className="payment-options">
            <h3 >ALL PAYMENT OPTIONS</h3>
            {!net && !creadit && (<div className="payment-details" onClick={() => setUpipay(!upipay)}>

            <img class="displayIcon" src="https://jsak.mmtcdn.com/payment-ui-service/images/payment/paymodes_gi/upi_paymode.png" alt="paymode icon" width="60px"/>
                 <span>
                 <h3>UPI Options</h3>
                 <p>Pay directly from your Bank Account</p>
                 </span>
             
            </div>)}
            {upipay && (
               <form onSubmit={handleupipayment}>
               <div className="paymentsucesss">
                   <span>
                       <label htmlFor="upiid">UPI Id:</label>
                       <input type="text" id="upiid" name="upiid" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" onChange={(e) => setUpiid(e.target.value)} required />
                   </span>
                   <span>
                       <label htmlFor="upipin">UPI Pin: </label>
                       <input type="tel" id="upipin" name="upipin" pattern="[0-9]{6}" onChange={(e) => setUpipin(e.target.value)} required />
                       <small>Please enter exactly 6 digits</small>
                   </span>
                   <button type="submit">Submit</button>
               </div>
           </form>
           
            )}
            
            {!net && !upipay &&(<div className="payment-details" onClick={()=>setCredit(!creadit)}>
            <img class="displayIcon" src="https://jsak.mmtcdn.com/payment-ui-service/images/payment/paymodes_gi/card_paymode.png" alt="paymode icon" width="60px"/>
                 <span>
                 <h3>Credit/Debit/ATM Card</h3>
                 <p>Visa, MasterCard, Amex, Rupay and more</p>
                 </span>
             
            </div>)}
            {creadit && (
               <form onSubmit={handlecreaditpayment}>
               <div className="paymentsucesss">
                    <span>
               <label htmlFor="cardNumber">Card Number:</label>
               <input type="text" id="cardNumber" name="cardNumber" pattern="[0-9]{13,16}" onChange={(e)=>setcardnum(e.target.value)}/>
               </span>
               <span>
               <label htmlFor="name">Name on Card: </label>
               <input type="text" id="name" name="name" pattern="[A-Za-z ]{1,}" onChange={(e)=>setName(e.target.value)}/>
               </span>
               <span>
               <label htmlFor="expiration">Expiration: </label>
               <input type="date" id="expiration" name="expiration" onChange={(e)=>setexp(e.target.value)}/>
               </span>
               <span>
               <label htmlFor="cvv">CVV: </label>
               <input type="text" id="cvv" name="cvv"  pattern="[0-9]{3,4}" title="Enter a valid CVV (3 or 4 digits)" onChange={(e)=>setCvv(e.target.value)}/>
               </span>
              <button type="submit">Submit</button>
               </div>
               </form>
            )}
            
          {!upipay && !creadit &&( <div className="payment-details" onClick={()=>setNet(!net)}>
            <img class="displayIcon" src="https://jsak.mmtcdn.com/payment-ui-service/images/payment/paymodes_gi/netbanking_paymode.png" alt="paymode icon" width="60px"/>
                 <span>
                 <h3>Net Banking</h3>
                 <p>All major Banks available</p>
                 </span>
             
            </div>)}
            {net && (
               <form onSubmit={handleNetPayment}>
               <div className="paymentsucesss">
               <span>
               <label htmlFor="bankname">Bank Name:</label>
               <input type="text" id="bankname" name="bankname" onChange={(e)=>setbankname(e.target.value)}/>
               </span>
               <span>
               <label htmlFor="account">Account Number: </label>
               <input type="text" id="account" name="account" pattern="[0-9]{10}" onChange={(e)=>setaccount(e.target.value)}/>
               </span>
               <span>
               <label htmlFor="holdername">Account Holder Name: </label>
               <input type="text" id="holdername" name="holdername" onChange={(e)=>setholdername(e.target.value)}/>
               </span>
               <span>
               <label htmlFor="ifsc">IFSC code: </label>
               <input type="text" id="ifsc" name="ifsc" pattern="[A-Za-z]{4}[0][A-Z0-9a-z]{6}"  onChange={(e)=>setIfsc(e.target.value)}/>
               </span>
              <button type="submit">Submit</button>
               </div>
               </form>
            )}
           
            
        </div>
      </div>
    </div>
  );
}

