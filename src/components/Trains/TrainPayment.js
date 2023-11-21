import React, { useState } from "react";
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

export default function TrainPayment({ details,total, closeModal,userDetails }) {

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
            <div className="payment-details">
            <img class="displayIcon" src="https://jsak.mmtcdn.com/payment-ui-service/images/payment/paymodes_gi/upi_paymode.png" alt="paymode icon" width="60px"/>
                 <span>
                 <h3>UPI Options</h3>
                 <p>Pay directly from your Bank Account</p>
                 </span>
             
            </div>
            <div className="payment-details">
            <img class="displayIcon" src="https://jsak.mmtcdn.com/payment-ui-service/images/payment/paymodes_gi/card_paymode.png" alt="paymode icon" width="60px"/>
                 <span>
                 <h3>Credit/Debit/ATM Card</h3>
                 <p>Visa, MasterCard, Amex, Rupay and more</p>
                 </span>
             
            </div>
            <div className="payment-details">
            <img class="displayIcon" src="https://jsak.mmtcdn.com/payment-ui-service/images/payment/paymodes_gi/netbanking_paymode.png" alt="paymode icon" width="60px"/>
                 <span>
                 <h3>Net Banking</h3>
                 <p>All major Banks available</p>
                 </span>
             
            </div>
            <div className="payment-details">
            <img class="displayIcon" src="https://jsak.mmtcdn.com/payment-ui-service/images/payment/paymodes_gi/wallet_paymode.png" alt="paymode icon" width="60px"/>
                 <span>
                 <h3>Mobile Wallets</h3>
                 <p>AmazonPay, Mobikwik, Payzapp</p>
                 </span>
             
            </div>
            <div className="payment-details">
            <img class="displayIcon" src="https://jsak.mmtcdn.com/payment-ui-service/images/payment/paymodes_gi/emi_paymode.png" alt="paymode icon" width="60px"/>
                 <span>
                 <h3>EMI</h3>
                 <p>Credit/Debit Card EMI available</p>
                 </span>
             
            </div>
            
            
        </div>
      </div>
    </div>
  );
}

