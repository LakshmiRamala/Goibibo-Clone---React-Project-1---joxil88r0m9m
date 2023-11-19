import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom";
import SyncAltTwoToneIcon from '@mui/icons-material/SyncAltTwoTone';
export default function Trains(){
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
            navigate(`/trains/${source}&${destination}`, { state: { source, destination, day } });
        }
        else{
          alert("Please Provide all details");
        }
    };
    return (
        <div className="flights">
            <h2 className="heading">Train Ticket Booking</h2>
            <form className="details" onSubmit={handleSubmit}>
                <div id="journeyinfo">
                    <input type="text" id="from" placeholder="Enter Source...(Delhi)" onChange={(e) => setSource(e.target.value)} value={source} />
                    <button id="toggle" onClick={handleToggle}><SyncAltTwoToneIcon color="primary" /></button>
                    <input type="text" id="to" placeholder="Enter Destination....(Hyderabad)" onChange={(e) => setDestination(e.target.value)} value={destination} />
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
                    <button type="submit" id="searchflights">Search Trains</button>
                </div>
            </form>
            <div>
            <main style={{color:"black",marginTop:"50px"}}>
              <h1>1 million+ customers</h1>
              <p style={{fontSize:"20px"}}>book train tickets with us because</p>
            </main>
            <section style={{display:"flex",color:"black",margin:"60px 240px",gap:"30px"}}>
              <div style={{display:"flex"}}>
                <img src="https://gos3.ibcdn.com/no_can_fee-1668596842.svg" alt="benefits icon" width="60" height="60"/>
                <span>
                <h2>No Cancellation Fee</h2>
                <p style={{fontSize:"20px"}}>You can opt for free cancellation & get full refund.</p>
                </span>
              </div>
              <div style={{display:"flex"}}>
              <img src="https://gos3.ibcdn.com/go_cnfrm-1668596688.svg" alt="benefits icon" width="60" height="60"/>
                <span>
                <h2>goConfirmed Trip</h2>
                <p style={{fontSize:"20px"}}>Guaranteed confirmed tickets or we give you 2x refund.</p>
                </span>
              </div>
              <div style={{display:"flex"}}>
              <img src="https://gos3.ibcdn.com/no_pg_fee_icon-1673341757.png" alt="benefits icon" width="60" height="60"/>
                <span>
                <h2>No PG Fee via UPI</h2>
                <p style={{fontSize:"20px"}}>Zero Payment Gateway Charges via UPI mode</p>
                </span>
              </div>
            </section>
            </div>
    </div>
  );

}