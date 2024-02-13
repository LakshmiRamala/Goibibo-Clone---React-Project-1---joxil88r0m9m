import React from "react";

export default function Tripsdata({ details }) {
  console.log(details);

  if (!details) {
    // Handle the case when details is null or undefined
    return null;
  }

  const formattedDate = new Date(details.created_at).toLocaleDateString();
  const formattedTime = new Date(details.created_at).toLocaleTimeString();

  return (
    <div className="tripsdata-hotel">
      {details.booking_type === "hotel" &&(
      <> 
        <p>{details.hotel.name}</p>
      <p>{details.hotel.location}</p>
      </>)}
      {
        details.booking_type==="flight" && (
          <>
          <p>{details.flight.source}</p>
          <p>{details.flight.destination}</p>
          </>
        )
      }
      {
        details.booking_type==="train" && (
          <>
          <p>{details.train.trainNumber}</p>
          <p>{details.train.trainName}</p>
          </>
        )
      }
      {
        details.booking_type==="bus" && (
          <>
          <p>{details.bus.name}</p>
          <p>{details.bus.source}</p>
          <p>{details.bus.destination}</p>
          </>
        )
      }
      <p>{details.booking_type}</p>
      <p>{formattedDate} {formattedTime}</p>
    </div>
  );
}
