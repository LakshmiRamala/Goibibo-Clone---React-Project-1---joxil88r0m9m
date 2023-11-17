import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function Hotels() {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    if(location){
    navigate(`/hotels/search/${location}`);
    }
    }

  return (
    <div className="hotel">
      <h2 className="heading">Book Hotels & Homestays</h2>
      <form className="details" onSubmit={handlesubmit}>
        <div id="location">
          <span id="hotellocation">
            <label htmlFor="location" style={{fontSize:"24px"}}>Enter City Name:</label>
            <input
              type="text"
              id="location"
              name="city"
              onChange={(e) => setLocation(e.target.value)}
              style={{textTransform:"uppercase"}}
            />
          </span>
        </div>
        <div id="searchhotel">
          <button type="submit" id="searchhotels">
            Search Hotels
          </button>
        </div>
      </form>
    </div>
  );
}

