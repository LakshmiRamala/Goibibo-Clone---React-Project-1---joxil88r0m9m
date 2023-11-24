import React from "react";
import flighticon from "../Assets/flighticon.png";
import hotel from "../Assets/hotel.webp";
import train from "../Assets/train.png";
import bus from "../Assets/bus.png";
import logo from "../Assets/flight.png";
import { NavLink } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import LuggageIcon from '@mui/icons-material/Luggage';
import { Profile } from "./Profile";

export default function HomePage() {
  return (
    <div className="home-container">
      <NavLink to="/" id="goibibolog">
        <img src={logo} id="logo" />
        {window.innerWidth <= 768 && (
          <div style={{ padding: "0px 20px" }}>
            <Profile />
          </div>
        )}
      </NavLink>
      <div className="home-imagecontainers">
        <NavLink to="/flights" className="imagecontainer">
          <img src={flighticon} alt="Flighticon" className="homeimages" />
        </NavLink>
        <NavLink to="/trains" className="imagecontainer">
          <img src={train} alt="Train" className="homeimages" />
        </NavLink>
        <NavLink to="/hotels" className="imagecontainer">
          <img src={hotel} alt="hotel" className="homeimages" />
        </NavLink>
        <NavLink to="/bus" className="imagecontainer">
          <img src={bus} alt="bus" className="homeimages" />
        </NavLink>
      </div>
      <footer className="homefooter">
        <NavLink to="/">
          <HomeIcon color="primary" fontSize="large"/>
        </NavLink>
        <NavLink to="/mysupport/trips">
          <LuggageIcon color="primary" fontSize="large"/>
        </NavLink>
      </footer>
    </div>
  );
}
