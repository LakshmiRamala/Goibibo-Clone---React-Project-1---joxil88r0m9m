import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SyncAltTwoToneIcon from '@mui/icons-material/SyncAltTwoTone';
import { useNavigate } from "react-router-dom";
import SwapVertIcon from '@mui/icons-material/SwapVert';
import flightsimg from "../Assets/flightsadd.avif";

export default function Flights() {
    const [source, setSource] = useState("");
    const [destination, setDestination] = useState("");
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
            navigate(`/flights/${source}&${destination}`, { state: { source, destination, day } });
        } else {
            alert("Please select a date!!!");
        }
    };

    return (
        <div className="flights" id={window.innerWidth >= 768 && "fligts"}>
            {window.innerWidth >= 768 && <h2 className="heading">Book Domestic and International Flight Tickets</h2>}
            {window.innerWidth < 768 && <h2 className="heading"> Domestic and International Flights</h2>}

            <form className="details" onSubmit={handleSubmit}>
                {window.innerWidth >= 768 && <section className="radio-button">
                    <div className="single-button selected">
                        <input type="radio" id="oneway" defaultChecked />
                        <label htmlFor="oneway">One-way</label>
                    </div>
                    <div className="single-button" style={{ cursor: "not-allowed" }}>
                        <input type="radio" id="roundtrip" checked={false} />
                        <label htmlFor="roundtrip">Round-trip</label>
                    </div>
                    <div className="single-button" style={{ cursor: "not-allowed" }}>
                        <input type="radio" id="multicity" checked={false} />
                        <label htmlFor="multicity">Multi-city</label>
                    </div>
                </section>}
                <div className="journeyinfo">
                    <input type="text" id="from" placeholder="Enter Source...(HYD)" onChange={(e) => setSource(e.target.value)} value={source} />
                    {window.innerWidth > 768 && <button id="toggle" onClick={handleToggle}><SyncAltTwoToneIcon color="primary" /></button>}
                    {window.innerWidth <= 768 && <button id="toggle" onClick={handleToggle}><SwapVertIcon color="primary" /></button>}
                    <input type="text" id="to" placeholder="Enter Destination...(BOM)" onChange={(e) => setDestination(e.target.value)} value={destination} />
                    <DatePicker
                        selected={selectedDate}
                        onChange={date => setSelectedDate(date)}
                        minDate={new Date()} 
                        placeholderText="Select Date"
                        className="datepicker"
                    />
                </div>

                <div className="searchflight">
                    <button type="submit" id="searchflights" style={{ width: window.innerWidth >= 768 ? "20%" : "60%" }}>Search Flights</button>
                </div>
            </form>

            {window.innerWidth >= 768 && <img src={flightsimg} alt="flightadd" style={{ marginTop: "40px" }} width="60%" />}
        </div>
    );
}
