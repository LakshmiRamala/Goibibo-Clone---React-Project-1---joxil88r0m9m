import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";

export default function Hotelroom({ details, hotelId, hotelDetails }) {
  const { roomNumber, roomType, price, bedDetail } = details;
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
    sessionStorage.setItem("details", JSON.stringify(details));
        sessionStorage.setItem("hotelDetails", JSON.stringify(hotelDetails));

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

        const bookingId = res.data.bookingId?._id;
        if (bookingId) {
          sessionStorage.setItem("bookingId", bookingId);
          sessionStorage.setItem("userId", JSON.stringify(res.data.bookingId.user));

          // Navigate to "/checkoutPage"
          navigate("/checkoutPage");
        }
      } catch (err) {
        console.error("Error:", err);
      }
    } else {
      // Navigate to "/login" with state information
      navigate("/login", { state: { prevPath: "/checkoutPage" } });
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
