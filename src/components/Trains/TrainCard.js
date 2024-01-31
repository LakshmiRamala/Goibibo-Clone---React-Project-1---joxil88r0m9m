import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
import axios from "axios";

export default function TrainCard({ details, trainId }) {
  const {
    trainType,
    trainNumber,
    trainName,
    destination,
    source,
    arrivalTime,
    departureTime,
    fare,
    travelDuration,
    daysOfOperation,
    coaches,
    availableSeats,
  } = details;

  const days = daysOfOperation.map((day) => day.slice(0, 1).toUpperCase()).join("  ");
  sessionStorage.setItem("trainDetails",JSON.stringify(details));
  const [currentCoachIndex, setCurrentCoachIndex] = useState(0);
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const coachesInfo = coaches.map((coach, index) => (
    <div
      key={index}
      className="train-coach-info"
      onClick={() => handleBookNow(coach)}
      style={{ cursor: "pointer" }} 
    >
      <p style={{ backgroundColor: "#f7edf6" }}>
        <span>{coach.coachType}</span> <span>₹{fare}</span>
      </p>
      <p style={{ backgroundColor: "#eddbce" }}>GNWL {coach.numberOfSeats}</p>
    </div>
  ));
  


  const showPrevButton = currentCoachIndex > 0;
  const showNextButton = currentCoachIndex < coaches.length - 3;

  const handlePrevClick = () => {
    setCurrentCoachIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentCoachIndex((prevIndex) => Math.min(coaches.length - 3, prevIndex + 1));
  };

  const handleBookNow = async (coach) => {
    sessionStorage.setItem("coach", JSON.stringify(coach));
    
  
    if (isLoggedIn) {
      try {
        const token = sessionStorage.getItem("userToken");

        const config = {
          headers: {
            projectId: "9sa80czkq1na",
            Authorization: `Bearer ${token}`,
          },
        };

        const requestBody = {
          bookingType: "train",
          bookingDetails: {
            trainId: trainId,
          },
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
          navigate("/trains/checkout");
        }
      } catch (err) {
        console.error("Error:", err);
      }
    } else {
      navigate("/login", { state: { prevPath: "/trains/checkout" } });
    }
  };

  return (
    <div className="traincard">
      <div className="trainheading">
        <h1>
          {trainNumber} {trainName}({trainType})
        </h1>
        <p>Runs on: {days}</p>
      </div>
      <section className="trainheading">
        <h3>
          {departureTime} {source}
        </h3>
        <p>--{travelDuration}--</p>
        <h3>
          {arrivalTime} {destination}
        </h3>
      </section>
      <div className="train-info">
        <div className="train-coach" >
          {showPrevButton && (
            <button onClick={handlePrevClick} className="train-coach-button">
              &#10094;
            </button>
          )}
          {coachesInfo.slice(currentCoachIndex, currentCoachIndex + 3)}
          {showNextButton && (
            <button onClick={handleNextClick} className="train-coach-button">
              &#10095;
            </button>
          )}
        </div>
        <p id="train-available-seats">Available Seats: {availableSeats}</p>
      </div>
    </div>
  );
}
