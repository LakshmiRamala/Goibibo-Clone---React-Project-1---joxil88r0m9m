import React, {  useState } from "react";
import SyncAltTwoToneIcon from '@mui/icons-material/SyncAltTwoTone';
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SwapVertIcon from '@mui/icons-material/SwapVert';
export default function Bus(){
    const [source, setSource] = useState("");
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
            navigate(`/bus/${source}&${destination}`, { state: { source, destination, day } });
        }
        else{
            alert("Please provide day!!!");
          }
    };
    return (
        <>
         <div className="flights" style={{backgroundColor:"#2176d1",height:window.innerWidth>=768 && "180px"}} >
            <h2 className="heading">Bus Ticket Booking</h2>
            <form className="details" onSubmit={handleSubmit}>
                <div className="journeyinfo">
                    <input type="text" id="from" placeholder="Enter Source....(Hyderabad)" onChange={(e) => setSource(e.target.value)} value={source} />
                    {window.innerWidth>768 &&<button id="toggle" onClick={handleToggle}><SyncAltTwoToneIcon color="primary" /></button>}
                    {window.innerWidth<=768 &&<button id="toggle" onClick={handleToggle}><SwapVertIcon color="primary"/></button>}
                    <input type="text" id="to" placeholder="Enter Destination....(Gujarat)" onChange={(e) => setDestination(e.target.value)} value={destination} />
                    <DatePicker
                        selected={selectedDate}
                        onChange={date => setSelectedDate(date)}
                        minDate={new Date()} 
                        placeholderText="Select Date"
                        className="datepicker"
                    />
                </div>
                <div className="searchflight">
                    <button type="submit" id="searchflights" style={{backgroundColor:"#2176d1",width: window.innerWidth >= 768 ? "20%" : "60%" }}>Search Bus</button>
                </div>
            </form>
    </div>
       {window.innerWidth>768 && (
        <div style={{marginTop:"8%"}}>
    <h1 style={{marginLeft:"5%"}}>Government Buses</h1>
    <div className="statebus-details">
       
        <section className="statebus">
            <img src="https://gos3.ibcdn.com/apsrtc_logo-1649928651.png" alt="apsrtc" width="50px"/>
            <h3>APSRTC</h3>
            <p>Andhra Pradesh State Road Transport Corporation</p>
        </section>
        <section className="statebus">
            <img src="https://gos3.ibcdn.com/hrtc_logo-1649928862.png" alt="hrtc" width="50px"/>
            <h3>HRTC</h3>
            <p>Himachal Road Transport Corporation</p>
        </section>
        <section className="statebus">
            <img src="https://gos3.ibcdn.com/ktc-1649929811.png" alt="ktc" width="50px"/>
            <h3>KTC</h3>
            <p>Kadamba Transport Corporation</p>
        </section>
        <section className="statebus">
            <img src="https://gos3.ibcdn.com/msrtc_logo-1649928973.png" alt="msrtc" width="50px"/>
            <h3>MSRTC</h3>
            <p>Maharashtra State Road Transport Corporation</p>
        </section>
        <section className="statebus">
            <img src="https://gos3.ibcdn.com/rsrtc_logo-1649929033.png" alt="rsrtc" width="50px"/>
            <h3>RSRTC</h3>
            <p>Rajasthan State Road Transport Corporation</p>
        </section>
        <section className="statebus">
            <img src="https://gos3.ibcdn.com/sbstc-1649930682.png" alt="sbstc" width="50px"/>
            <h3>SBSTC</h3>
            <p>South Bengal State Transport Corporation</p>
        </section>
        <section className="statebus">
            <img src="https://gos3.ibcdn.com/TSRTC-1649929129.png" alt="tsrtc" width="50px"/>
            <h3>TSRTC</h3>
            <p>Telangana State Road Transport Corporation</p>
        </section>
        <section className="statebus">
            <img src="https://gos3.ibcdn.com/upsrtc-1649930806.png" alt="upsrtc" width="50px"/>
            <h3>UPSRTC</h3>
            <p>Uttar Pradesh State Road Transport Corporation</p>
        </section>
        <section className="statebus">
            <img src="https://gos3.ibcdn.com/wbtc_logo-1649930411.png" alt="wbtc" width="50px"/>
            <h3>WBTC</h3>
            <p>West Bengal Transport Corporation</p>
        </section>
        
    </div>
    </div>)}
    </>
  );
}