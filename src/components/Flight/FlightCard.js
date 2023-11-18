import React from "react";
export default function FlightCard({ details }) {
    const { flightID, source, destination, arrivalTime, departureTime
        , ticketPrice, duration, stops, amenities } = details;
    const benifits = amenities.map((val) => val).join(" , ");
    return (
        <div className="Flightcard">
            <div>
                <h4 style={{color:"red"}}>{flightID}</h4>
            </div>
            <div id="flightbookindetails">
                <span>
                    <p style={{color:"grey"}}>SOURCE: {source}</p>
                    <h3 style={{fontWeight:"500"}}>Depature Time: {departureTime}</h3>
                </span>
                <span>
                <p style={{color:"grey"}}>Duration: {duration}</p>
                <h3 style={{fontWeight:"500"}}>No of stops:{stops}</h3>
                </span>
                <span>
                    <p style={{color:"grey"}}>Destination: {destination}</p>
                    <h3 style={{fontWeight:"500"}}>Arrival Time: {arrivalTime}</h3>
                </span>
               

                </div>
                <h3 style={{fontWeight:"500"}}>Ticket Price: ₹{ticketPrice}</h3>
               
                <p style={{color:"green",fontWeight:"500"}}>{benifits}</p>
           
        </div>
    )
}