import React, { useEffect, useState } from "react";
import SyncAltTwoToneIcon from '@mui/icons-material/SyncAltTwoTone';
import { useNavigate } from "react-router-dom";
import SwapVertIcon from '@mui/icons-material/SwapVert';
import flightsimg from "../Assets/flightsadd.avif";
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
        else {
            alert("Please Provide day!!!");
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
                {window.innerWidth >= 768 && <section className="flighttype">
                    <small>Select A<br />Fare Type:   </small>
                    <div className="single-button selected">
                        <input type="radio" id="regular" defaultChecked />
                        <label htmlFor="regular">Regular</label>
                    </div>
                    <div className="single-button" style={{ cursor: "not-allowed" }}>
                        <input type="radio" id="armedforces" checked={false} />
                        <label htmlFor="armedforces">Armed Forces</label>
                    </div>
                    <div className="single-button" style={{ cursor: "not-allowed" }}>
                        <input type="radio" id="senior" checked={false} />
                        <label htmlFor="senior">Senior Citizen</label>
                    </div>
                    <div className="single-button" style={{ cursor: "not-allowed" }}>
                        <input type="radio" id="student" checked={false} />
                        <label htmlFor="student">Student</label>
                    </div>
                    <div className="single-button" style={{ cursor: "not-allowed" }}>
                        <input type="radio" id="doctor" checked={false} />
                        <label htmlFor="doctor">Doctors & Nurses</label>
                    </div>
                </section>}

                <div className="searchflight" >
                    <button type="submit" id="searchflights" style={{ width: window.innerWidth >= 768 ? "20%" : "60%" }}>Search Flights</button>
                </div>

            </form>
            {window.innerWidth >= 768 && <img src={flightsimg} alt="flightadd" style={{ marginTop: "40px" }} width="60%" />}

        </div>
    );
}