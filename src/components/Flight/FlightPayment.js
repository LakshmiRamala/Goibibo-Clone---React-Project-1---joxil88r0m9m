import React, { useState } from "react";
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import { useNavigate } from "react-router-dom";

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
     const [upiid,setUpiid]=useState("");
     const [upipin,setUpipin]=useState("");
     const navigate=useNavigate();
     const handleNetPayment = () => {
          if (bankname && account && holdername && ifsc) {
            alert("Booking Success!!");
            navigate("/flights");
          } else {
            alert("Please provide all details");
          }
        };
     const handlecreaditpayment=()=>{
          if(name && cardnum && cvv && exp){
               alert("Booking Success!!");
               navigate("/flights");
          }
          else{
               alert("Please provide all details");
          }
     }
     const handleupipayment=()=>{
          if(upiid && upipin){
               alert("Booking Success!!");
               navigate("/flights")
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
               <div className="paymentsucesss">
                    <span>
               <label htmlFor="upiid">UPI Id:</label>
               <input type="text" id="upiid" name="upiid" onChange={(e)=>setUpiid(e.target.value)}/>
               </span>
               <span>
               <label htmlFor="upipin">UPI Pin: </label>
               <input type="text" id="upipin" name="upipin" onChange={(e)=>setUpipin(e.target.value)}/>
               </span>
              <button type="submit" onClick={handleupipayment}>Submit</button>
               </div>
            )}
            
            {!net && !upipay &&(<div className="payment-details" onClick={()=>setCredit(!creadit)}>
            <img class="displayIcon" src="https://jsak.mmtcdn.com/payment-ui-service/images/payment/paymodes_gi/card_paymode.png" alt="paymode icon" width="60px"/>
                 <span>
                 <h3>Credit/Debit/ATM Card</h3>
                 <p>Visa, MasterCard, Amex, Rupay and more</p>
                 </span>
             
            </div>)}
            {creadit && (
               <div className="paymentsucesss">
                    <span>
               <label htmlFor="cardNumber">Card Number:</label>
               <input type="text" id="cardNumber" name="cardNumber" onChange={(e)=>setcardnum(e.target.value)}/>
               </span>
               <span>
               <label htmlFor="name">Name on Card: </label>
               <input type="text" id="name" name="name" onChange={(e)=>setName(e.target.value)}/>
               </span>
               <span>
               <label htmlFor="expiration">Expiration: </label>
               <input type="date" id="expiration" name="expiration" onChange={(e)=>setexp(e.target.value)}/>
               </span>
               <span>
               <label htmlFor="cvv">CVV: </label>
               <input type="text" id="cvv" name="cvv" onChange={(e)=>setCvv(e.target.value)}/>
               </span>
              <button type="submit" onClick={handlecreaditpayment}>Submit</button>
               </div>
            )}
            
          {!upipay && !creadit &&( <div className="payment-details" onClick={()=>setNet(!net)}>
            <img class="displayIcon" src="https://jsak.mmtcdn.com/payment-ui-service/images/payment/paymodes_gi/netbanking_paymode.png" alt="paymode icon" width="60px"/>
                 <span>
                 <h3>Net Banking</h3>
                 <p>All major Banks available</p>
                 </span>
             
            </div>)}
            {net && (
               <div className="paymentsucesss">
               <span>
               <label htmlFor="bankname">Bank Name:</label>
               <input type="text" id="bankname" name="bankname" onChange={(e)=>setbankname(e.target.value)}/>
               </span>
               <span>
               <label htmlFor="account">Account Number: </label>
               <input type="text" id="account" name="account" onChange={(e)=>setaccount(e.target.value)}/>
               </span>
               <span>
               <label htmlFor="holdername">Account Holder Name: </label>
               <input type="date" id="holdername" name="holdername" onChange={(e)=>setholdername(e.target.value)}/>
               </span>
               <span>
               <label htmlFor="ifsc">IFSC code: </label>
               <input type="text" id="ifsc" name="ifsc" onChange={(e)=>setIfsc(e.target.value)}/>
               </span>
              <button type="submit" onClick={handleNetPayment}>Submit</button>
               </div>
            )}
           
            
        </div>
      </div>
    </div>
  );
}

