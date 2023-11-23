import React from "react";

export default function Tripsdata({ details }) {
  console.log("details", details);

  const formattedDate = new Date(details.created_at).toLocaleDateString();
  const formattedTime= new Date(details.created_at).toLocaleTimeString();

  return (
    <div className="tripsdata-hotel">
        <p>{details._id}</p>
        <p>{details.booking_type}</p>
        <p>{details.status}</p>
        <p>{formattedDate} {formattedTime}</p>
      </div>
   
  );
}
