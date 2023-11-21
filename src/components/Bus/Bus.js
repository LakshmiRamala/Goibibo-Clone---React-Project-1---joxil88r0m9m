import React, {  useState } from "react";
import SyncAltTwoToneIcon from '@mui/icons-material/SyncAltTwoTone';
import { useNavigate } from "react-router-dom";

export default function Bus() {
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

        if (source && destination && day) {
            navigate(`/bus/${source}&${destination}`, { state: { source, destination, day } });
        }
        else{
            alert("Please Provide all details");
          }
    };
    return (
        <div className="flights" style={{backgroundColor:"#2176d1"}}>
            <h2 className="heading">Bus Ticket Booking</h2>
            <form className="details" onSubmit={handleSubmit}>
                <div id="journeyinfo">
                    <input type="text" id="from" placeholder="Enter Source....(Hyderabad)" onChange={(e) => setSource(e.target.value)} value={source} />
                    <button id="toggle" onClick={handleToggle}><SyncAltTwoToneIcon color="primary" /></button>
                    <input type="text" id="to" placeholder="Enter Destination....(Gujarat)" onChange={(e) => setDestination(e.target.value)} value={destination} />
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
                <div id="searchflight">
                    <button type="submit" id="searchflights" style={{backgroundColor:"#2176d1"}}>Search Bus</button>
                </div>
            </form>
    </div>
  );
}