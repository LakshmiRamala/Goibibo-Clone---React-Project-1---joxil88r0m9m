import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function BusCard({ details }) {
    const { name, source, destination, arrivalTime, departureTime, available
        , fare, seats, type, ratings, amenities, _id } = details;
    const benifits = amenities.map((val) => val).join(" , ");
    const navigate=useNavigate();

    const handleClick = () => {
        navigate(`/bus/book/${_id}`);
    }
        

    return (
        <div className="hotelcard">
            <div  >
                <div style={{ textAlign: "center" }}>
                    <h2 style={{ color: "red" }}>{name}</h2>
                </div>
                <div id="flightbookindetails" style={{ margin: "30px 0px" }}>
                    <span>
                        <p style={{ color: "blue" }}>{source}</p>
                        <h3 style={{ fontWeight: "500" }}>{departureTime}</h3>
                    </span>
                    <span>
                        <p style={{ color: "blue" }}>{destination}</p>
                        <h3 style={{ fontWeight: "500" }}>{arrivalTime}</h3>
                    </span>
                    <span>
                        <p style={{ color: "blue" }}>Available: {available ? "true": "false" }</p>
                        <h3 style={{ fontWeight: "500" }}>No of Seats: {seats}</h3>
                    </span>
                    <span>
                        <p style={{ color: "blue" }}>{type}</p>
                        <h3 style={{ fontWeight: "500" }}>Ratings: {ratings}</h3>
                    </span>

                </div>
                <div style={{ textAlign: "center" }}>

                    <h3 style={{ fontWeight: "500" }}>Ticket Price: ₹{fare}</h3>
                    <button onClick={handleClick} style={{ cursor: "pointer", backgroundColor: "darkBlue", color: "white", borderRadius: "12px", padding: "8px" }}>SELECT SEAT</button>
                </div>
                <p style={{ color: "green", fontWeight: "500", textAlign: "center" }}>{benifits}</p>

            </div>
            
        </div>
    );
}


