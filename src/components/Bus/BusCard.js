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
        <div className="Flightcard">
                <div className="busCard-container">
                    <h2 style={{ color: "red" }}>{name}</h2>
                </div>
                <div className="flightbookindetails">
                    <span>
                        <p style={{ color: "blue" }}>{source}</p>
                        <h3>{departureTime}</h3>
                    </span>
                   
                    <span>
                        <p style={{ color: "blue" }}>{destination}</p>
                       
                        <h3>{arrivalTime}</h3>
                    </span>
                    <span>
                        <p style={{ color: "blue" }}>Available: {available ? "true": "false" }</p>
                        <h3>No of Seats: {seats}</h3>
                    </span>
                    <span>
                        <p style={{ color: "blue" }}>{type}</p>
                        <h3>Ratings: {ratings}</h3>
                    </span>

                </div>
                <div className="busresponsive-button">

                    <h3>Ticket Price: ₹{fare}</h3>
                    <button onClick={handleClick}>SELECT SEAT</button>
                </div>
                <p className="bus-benifits">{benifits}</p>
            
        </div>
    );
}


