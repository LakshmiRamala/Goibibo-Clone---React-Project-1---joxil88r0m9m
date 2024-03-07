import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import FlightOutlinedIcon from '@mui/icons-material/FlightOutlined';
import HotelIcon from '@mui/icons-material/Hotel';
import TrainIcon from '@mui/icons-material/Train';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../Assets/flight.png";
import { useMediaQuery } from 'react-responsive';

import { Profile } from "../Profile/Profile";
const HomeNav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="home-nav"> 
     {isMobile && (<> <div  id="goibibolog">

      <NavLink to="/">
        <img src={logo} id="logo" alt="logo" width="170%" height="100%"/>
        </NavLink>
       
          <div style={{ padding: "0px 20px" }}>
            <Profile />
          </div>
          <div className="menu-icon" onClick={toggleMenu}>
        <MenuIcon color="primary"/>
      </div>
     
       </div> </>)}
     
      {isMenuOpen && (
        <ul className="menu-list">
          <li>
            <NavLink to="/flights" onClick={closeMenu} className="menu-nav">
              <FlightOutlinedIcon color="primary" />
              Flights
            </NavLink>
          </li>
          <li>
            <NavLink to="/hotels" onClick={closeMenu} className="menu-nav">
              <HotelIcon color="primary"/>
              Hotels
            </NavLink>
          </li>
          <li>
            <NavLink to="/trains" onClick={closeMenu} className="menu-nav">
              <TrainIcon color="primary"/>
              Trains
            </NavLink>
          </li>
          <li>
            <NavLink to="/bus" onClick={closeMenu} className="menu-nav">
              <DirectionsBusIcon color="primary"/>
              Bus
            </NavLink>
          </li>
        </ul>
      )}
      
    </nav>
  );
};

export default HomeNav;
