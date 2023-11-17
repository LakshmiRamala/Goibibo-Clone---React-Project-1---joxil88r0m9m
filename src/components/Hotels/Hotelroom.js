import React from "react";
import axios from "axios";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";

export default function Hotelroom({ details, hotelId, hotelDetails }) {
  const { roomNumber, roomType, price, bedDetail, _id } = details;
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const { pathname } = useLocation();

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
          bookingType: "hotel",
          bookingDetails: {
            hotelId: hotelId,
          }
        };

        const res = await axios.post(
          "https://academics.newtonschool.co/api/v1/bookingportals/booking",
          { ...requestBody, appType: "bookingportals" },
          config
        );

        const bookingId = res.data.bookingId._id;
        if (bookingId) {
          sessionStorage.setItem("bookingId", bookingId);
          sessionStorage.setItem("userId", JSON.stringify(res.data.bookingId.user));
      
          navigate("/checkoutPage", { state: { details, hotelDetails } });
        }
      } catch (err) {
        console.error("Error:", err);
      }
    } else {
      navigate("/login", { state: { prevPath: pathname } });
    }
  };

  return (
    <div className="room-details">
      <p>Room No: {roomNumber}</p>
      <p>Room Type: {roomType}</p>
      <p>Price: {price}</p>
      <p>Bed Details: {bedDetail}</p>
      <button onClick={handleBookNow}>Book This Now</button>
    </div>
  );
}
