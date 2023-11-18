import { useState } from "react";

export default function TrainCard({ details }) {
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
  
  const [currentCoachIndex, setCurrentCoachIndex] = useState(0);

  const coachesInfo = coaches.map((coach, index) => (
    <div key={index} className="train-coach-info">
      <p style={{ backgroundColor: "#f7edf6", display: "flex", justifyContent: "space-between" }}><span>{coach.coachType}</span> <span>₹{fare}</span></p>
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

  return (
    <div className="hotelcard">
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
        <p>----{travelDuration}----</p>
        <h3>
          {arrivalTime} {destination}
        </h3>
      </section>
      
      <div className="train-coach">
        {showPrevButton && (
          <button  onClick={handlePrevClick} className="train-coach-button">
            &#10094;
          </button>
        )}
        {coachesInfo.slice(currentCoachIndex, currentCoachIndex + 3)}
        {showNextButton && (
          <button  onClick={handleNextClick} className="train-coach-button">
            &#10095;
          </button>
        )}
      </div>
      <p>Available Seats: {availableSeats}</p>
    </div>
  );
}
