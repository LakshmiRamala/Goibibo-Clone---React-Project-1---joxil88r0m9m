import React from "react";
import { NavLink} from "react-router-dom";
import logo from "../Assets/flight.png";
import FlightOutlinedIcon from '@mui/icons-material/FlightOutlined';
import HotelIcon from '@mui/icons-material/Hotel';
import TrainIcon from '@mui/icons-material/Train';

import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import LuggageIcon from '@mui/icons-material/Luggage';
import { Profile } from "./Profile";



 export default function Navbar(){
    return (
        <nav className="nav-container">
            <NavLink to="flights" id="goibibolog"><img src={logo} id="logo"/>{window.innerWidth<=768 &&<div style={{padding:"0px 20px"}}><Profile/></div> }</NavLink>
            <ul className="navbar">
                <li><NavLink  className="navlink" to="/flights"><FlightOutlinedIcon color="primary" fontSize="large"/>Flights</NavLink></li>
                <li><NavLink  className="navlink" to="/hotels"><HotelIcon color="primary" fontSize="large"/> Hotels</NavLink></li>
                <li><NavLink  className="navlink" to="/trains"><TrainIcon color="primary" fontSize="large"/>Trains</NavLink></li>
                <li><NavLink  className="navlink" to="/bus"><DirectionsBusIcon color="primary" fontSize="large"/>Bus</NavLink></li>    
                 <li><NavLink id="mytrip" to="/mysupport/trips"><LuggageIcon fontSize="large"/><span>My Trips</span><br/> <span id="managebooking">Manage Booking</span></NavLink></li>
                 {window.innerWidth>768 && <Profile/>}
            </ul>
        </nav>
    )
 }