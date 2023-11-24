import React, { useEffect, useState } from "react";
import axios from "axios";
import Tripsdata from "./Tripsdata";

export default function MyTrips() {
  const token = sessionStorage.getItem("userToken");
  const [trips, setTrips] = useState([]);

  const getTripsData = async () => {
    const config = {
      headers: {
        projectId: "9sa80czkq1na",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const res = await axios.get(
        "https://academics.newtonschool.co/api/v1/bookingportals/booking/",
        config
      );
      setTrips(res.data.data);
    } catch (err) {
      console.log("Error:", err);
    }
  };

  useEffect(() => {
    getTripsData();
  }, [token]);

  return (
    <main>
        <div className="myrips">
            Your Trips
        </div>
    <div className="hotel-list-container">
      {trips &&
        trips.length > 0 &&
        trips.map((trip) => {
          return <Tripsdata details={trip} key={trip._id} />;
        })}
    </div>
    </main>
  );
}

