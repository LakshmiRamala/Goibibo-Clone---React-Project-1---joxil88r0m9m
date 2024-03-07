import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../Assets/flight.png";
import FlightImage from "../Flight/FlightImage";
import TrainImage from "../Trains/TrainImage";
import BusImage from "../Bus/BusImage";
import HotelImage from "../Hotels/HotelImage";
import { Profile } from "../Profile/Profile";
import { useMediaQuery } from 'react-responsive';

export default function Navbar() {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const currentURL = window.location.href;
    const handleLogoClick = () => {
        window.location.reload(); 
    };

    return (
        <nav className="nav-container">
            <NavLink to="flights" id="goibibolog"><img src={logo} id="logo" />{isMobile && <div style={{ padding: "0px 20px" }}><Profile /></div>}</NavLink>
            <ul className="navbar" >
                <li onClick={handleLogoClick}><NavLink className={currentURL.includes("/flights")?"navlink navlinkactive":"navlink"} to="/flights"><FlightImage/> Flights</NavLink></li>
                <li onClick={handleLogoClick}><NavLink className={currentURL.includes("/hotels")?"navlink navlinkactive":"navlink"}  to="/hotels"><HotelImage/> Hotels</NavLink></li>
                <li onClick={handleLogoClick}><NavLink className={currentURL.includes("/trains")?"navlink navlinkactive":"navlink"}  to="/trains"><TrainImage/> Trains</NavLink></li>
                <li onClick={handleLogoClick}><NavLink className={currentURL.includes("/bus")?"navlink navlinkactive":"navlink"}  to="/bus"><BusImage/> Bus</NavLink></li>
                <li onClick={handleLogoClick}><NavLink id="mytrip" to="/mysupport/trips"><div role="presentation" className="sc-1f95z5i-9 sc-1f95z5i-10 jRCPfd jEkKCK"><span className="header-sprite lfOpAg mytrip-icon sc-1f95z5i-13"></span><span><div><p style={{ color: "blue" }} className="kImAil sc-imWYAI">My Trips</p><p style={{ color: "#333" }} className="sc-imWYAI xvumD">Manage Booking</p></div></span></div></NavLink></li>
                {!isMobile && <Profile  />}
            </ul>
        </nav>
    )
}
