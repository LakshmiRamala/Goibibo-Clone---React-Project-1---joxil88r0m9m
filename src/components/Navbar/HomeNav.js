import React from "react";
import { NavLink } from "react-router-dom";
import FlightOutlinedIcon from '@mui/icons-material/FlightOutlined';
import HotelIcon from '@mui/icons-material/Hotel';
import TrainIcon from '@mui/icons-material/Train';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';

const HomeNav = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <NavLink  to="/flights">
            <FlightOutlinedIcon />
            Flights
          </NavLink>
        </li>
        <li>
          <NavLink  to="/hotels">
            <HotelIcon />
            Hotels
          </NavLink>
        </li>
        <li>
          <NavLink to="/trains">
            <TrainIcon />
            Trains
          </NavLink>
        </li>
        <li>
          <NavLink to="/bus">
            <DirectionsBusIcon />
            Bus
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default HomeNav;
