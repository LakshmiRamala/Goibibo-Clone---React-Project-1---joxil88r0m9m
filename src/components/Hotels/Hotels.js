import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Hotels() {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    if(location){
    navigate(`/hotels/search/${location}`);
    }
    else{
      alert("Please Provide location!!!");
    }
    }

  return (
    <div className="hotel">
      <h2 className="heading">Book Hotels & Homestays</h2>
      <form className="details" onSubmit={handlesubmit}>
        <div className="location">
          <span id="hotellocation">
            <input
              type="text"
              name="city"
              placeholder="Enter City....(Hyderbad)"
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

