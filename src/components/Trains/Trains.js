import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom";
import SyncAltTwoToneIcon from '@mui/icons-material/SyncAltTwoTone';
import Navbar from "../Navbar/Navbar";
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

        if ( day) {
            navigate(`/trains/${source}&${destination}`, { state: { source, destination, day } });
        }
        else{
          alert("Please Provide day");
        }
    };
    return (
        <div className="flights">
          <Navbar/>
            <h2 className="heading">Train Ticket Booking</h2>
            <form className="details" onSubmit={handleSubmit}>
                <div className="journeyinfo">
                    <input type="text" id="from" placeholder="Enter Source.(secunderabad))" onChange={(e) => setSource(e.target.value)} value={source} />
                    <button id="toggle" onClick={handleToggle}><SyncAltTwoToneIcon color="primary" /></button>
                    <input type="text" id="to" placeholder="Enter Destination..(varanasi)" onChange={(e) => setDestination(e.target.value)} value={destination} />
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
                <div className="searchflight trainbutton">
                    <button type="submit" id="searchflights">Search Trains</button>
                </div>
            </form>
            {window.innerWidth>768 &&  <div>
           <main className="train-container">
              <h1>1 million+ customers</h1>
              <p>book train tickets with us because</p>
            </main>
            <section className="train-container-images">
              <div>
                <img src="https://gos3.ibcdn.com/no_can_fee-1668596842.svg" alt="benefits icon" width="60" height="60"/>
                <span>
                <h2>No Cancellation Fee</h2>
                <p>You can opt for free cancellation & get full refund.</p>
                </span>
              </div>
              <div>
              <img src="https://gos3.ibcdn.com/go_cnfrm-1668596688.svg" alt="benefits icon" width="60" height="60"/>
                <span>
                <h2>goConfirmed Trip</h2>
                <p>Guaranteed confirmed tickets or we give you 2x refund.</p>
                </span>
              </div>
              <div>
              <img src="https://gos3.ibcdn.com/no_pg_fee_icon-1673341757.png" alt="benefits icon" width="60" height="60"/>
                <span>
                <h2>No PG Fee via UPI</h2>
                <p>Zero Payment Gateway Charges via UPI mode</p>
                </span>
              </div>
            </section>
            </div>}
    </div>
  );

}