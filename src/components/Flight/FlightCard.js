import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
import axios from "axios";

export default function FlightCard({ details,flightId }) {
    const { flightID, source, destination, arrivalTime, departureTime
        , ticketPrice, duration, stops, amenities } = details;
    const benifits = amenities.map((val) => val).join(" , ");
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
    sessionStorage.setItem("flightDeatils", JSON.stringify(details));

  const handleBookNow = async () => {
    if (isLoggedIn) {
      try {
        const token = sessionStorage.getItem("userToken");

        const config = {
          headers: {
            projectId: "9sa80czkq1na",
            Authorization: `Bearer ${token}`
          }
        };

        const requestBody = {
          bookingType: "flight",
          bookingDetails: {
            flightId: flightId,
          }
        };

        const res = await axios.post(
          "https://academics.newtonschool.co/api/v1/bookingportals/booking",
          { ...requestBody, appType: "bookingportals" },
          config
        );

        const bookingId = res.data.bookingId?._id;
        if (bookingId) {
          sessionStorage.setItem("bookingId", bookingId);
          sessionStorage.setItem("userId", JSON.stringify(res.data.bookingId.user));
          navigate("/flights/checkout");
        }
      } catch (err) {
        console.error("Error:", err);
      }
      navigate("/flights/checkout")
    } else {
      navigate("/login", { state: { prevPath: "/flights/checkout" } });
    }
  };
    return (
        <div className="Flightcard">
            <div>
                <h4 style={{color:"red"}}>{flightID}</h4>
            </div>
            <div className="flightbookindetails">
                <span>
                    <p style={{color:"grey"}}>SOURCE: {source}</p>
                    <h3>Depature Time: {departureTime}</h3>
                </span>

      
                <span>
                <p style={{color:"grey"}}>Duration: {duration}</p>
                <h3 >No of stops:{stops}</h3>
                </span>
                <span>
                    <p style={{color:"grey"}}>Destination: {destination}</p>
                    <h3>Arrival Time: {arrivalTime}</h3>
                </span>

                </div>
                <h3 className="flight-ticket-price">Ticket Price: ₹{ticketPrice}</h3>
               
                <p style={{color:"green"}} className="flight-ticket-price">{benifits}</p>
                <button type="submit" id="flight-booking-button" onClick={handleBookNow}>Book</button>
           
        </div>
    )
}