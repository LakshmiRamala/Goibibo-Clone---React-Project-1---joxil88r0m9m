import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom";
import SyncAltTwoToneIcon from '@mui/icons-material/SyncAltTwoTone';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useMediaQuery } from 'react-responsive';
export default function Trains(){
  const [source, setSource] = useState("");
  const isMobile = useMediaQuery({ maxWidth: 768 });
    const [destination, setDestination] = useState("");
    const [day, setDay] = useState("");
    const [selectedDate, setSelectedDate] = useState(null);
    const navigate = useNavigate();

    const handleToggle = () => {
        setDestination(source);
        setSource(destination);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (selectedDate) {
          const day = selectedDate.toLocaleDateString('en-US', { weekday: 'short' });
          navigate(`/trains/${source}&${destination}`, { state: { source, destination, day } });
        }
        else{
          alert("Please Provide day");
        }
    };
    return (
        <div className="flights" id={!isMobile && "trainnew"}>
            <h2 className="heading">Train Ticket Booking</h2>
            <form className="details" onSubmit={handleSubmit}>
              {!isMobile && <section className="radio-button">
                    <div className="single-button selected">
                        <input type="radio" id="book" defaultChecked />
                        <label htmlFor="book">Book Train tickets</label>
                    </div>
                    <div className="single-button" style={{ cursor: "not-allowed" }}>
                        <input type="radio" id="pnr" checked={false} />
                        <label htmlFor="pnr">Check PNR Status</label>
                    </div>
                    <div className="single-button" style={{ cursor: "not-allowed" }}>
                        <input type="radio" id="live" checked={false} />
                        <label htmlFor="live">Live Trains Status</label>
                    </div>
                </section>}
                <div className="journeyinfo" style={{marginTop:!isMobile && "50px"}}>
                    <input type="text" id="from" placeholder="Enter Source.(secunderabad))" onChange={(e) => setSource(e.target.value)} value={source} />
                    {!isMobile&&<button id="toggle" onClick={handleToggle}><SyncAltTwoToneIcon color="primary" /></button>}
                    {isMobile &&<button id="toggle" onClick={handleToggle}><SwapVertIcon color="primary"/></button>}
                    <input type="text" id="to" placeholder="Enter Destination..(varanasi)" onChange={(e) => setDestination(e.target.value)} value={destination} />
                    <DatePicker
                        selected={selectedDate}
                        onChange={date => setSelectedDate(date)}
                        minDate={new Date()} 
                        placeholderText="Select Date"
                        className="datepicker"
                    />
                </div>
                <div className="searchflight trainbutton" style={{margin:!isMobile ?"6%":"0%"}}>
                    <button type="submit" id="searchflights" style={{ width:!isMobile ? "20%" : "50%" }}>Search Trains</button>
                </div>
            </form>
            {!isMobile &&  <div>
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