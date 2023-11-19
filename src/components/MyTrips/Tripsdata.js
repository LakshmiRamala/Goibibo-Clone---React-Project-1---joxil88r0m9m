// Tripsdata.js
import React from "react";

export default function Tripsdata({ details }) {
    console.log("detais",details);
    return (
        <div className="hotelcard" style={{margin:"5% 18%"}} >
            <div className="mytripscard">
                <p>Booking Type: {details.booking_type}</p>
                <h2 style={{color:"#fc6203"}}>Hotel Name: {details.hotel.name}</h2>
                <p>{details.hotel.location}</p>
            </div>
        </div>
    );
}

