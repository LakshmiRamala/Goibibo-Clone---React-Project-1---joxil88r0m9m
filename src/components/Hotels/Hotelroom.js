import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthProvider";

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
        }
      } catch (err) {
        console.error("Error:", err);
      }
      navigate("/checkoutPage");
    } else {
      navigate("/login", { state: { prevPath: "/checkoutPage" } });
    }
  };

  return (
    <div className="room-details">
      <p>{roomNumber}</p>
      <p>{roomType}</p>
      <p>₹{price}</p>
      <p>{bedDetail}</p>
      <button onClick={handleBookNow}>Book This Now</button>
    </div>
  );
}
