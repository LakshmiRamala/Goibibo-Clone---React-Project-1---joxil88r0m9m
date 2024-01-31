import React, { useEffect, useState } from "react";
import SyncAltTwoToneIcon from '@mui/icons-material/SyncAltTwoTone';
import { useNavigate } from "react-router-dom";
import SwapVertIcon from '@mui/icons-material/SwapVert';

export default function Flights() {
    const [source, setSource] = useState("");
    const [destination, setDestination] = useState("");
    
    const [day, setDay] = useState("");
    const navigate = useNavigate();

    const handleToggle = () => {
        setDestination(source);
        setSource(destination);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (day) {
            navigate(`/flights/${source}&${destination}`, { state: { source, destination, day } });
        }
        else{
            alert("Please Provide day!!!");
          }
    };
    return (
        <div className="flights">
            <h2 className="heading">Domestic and International Flights</h2>
            <form className="details" onSubmit={handleSubmit}>
                <div className="journeyinfo">
                    <input type="text" id="from" placeholder="Enter Source...(HYD)" onChange={(e) => setSource(e.target.value)} value={source} />
                    {window.innerWidth>768 &&<button id="toggle" onClick={handleToggle}><SyncAltTwoToneIcon color="primary" /></button>}
                    {window.innerWidth<=768 &&<button id="toggle" onClick={handleToggle}><SwapVertIcon color="primary"/></button>}
                    <input type="text" id="to" placeholder="Enter Destination...(BOM)" onChange={(e) => setDestination(e.target.value)} value={destination} />
                    <select name="day" id="day" onChange={(e) => setDay(e.target.value)} value={day}>
                        <option value="" disabled>Select day</option>
                        <option value="Mon">Monday</option>
                        <option value="Tue">Tuesday</option>
                        <option value="Wed">Wednesday</option>
                        <option value="Thu">Thursday</option>
                        <option value="Fri">Friday</option>
                        <option value="Sat">Saturday</option>
                        <option value="Sun">Sunday</option>
                    </select>
                </div>
                <div className="searchflight">
                    <button type="submit" id="searchflights">Search Flights</button>
                </div>
            </form>
            
    </div>
  );
}