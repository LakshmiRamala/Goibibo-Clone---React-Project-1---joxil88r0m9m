import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useAuth } from "../provider/AuthProvider";
import {  Menu, MenuItem } from "@mui/material";
export const Profile = () => {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const userName = JSON.parse(sessionStorage.getItem("userName")).toUpperCase();
  const [anchorEl, setAnchorEl] = useState(null);
  const firstletter=isLoggedIn && (userName.charAt(0).toUpperCase());

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigateHandler = (path) => {
    navigate(path);
    handleClose();
  };

  const logout = () => {
    sessionStorage.removeItem("userToken");
    sessionStorage.removeItem("userName");
    sessionStorage.removeItem("userEmail");
    sessionStorage.removeItem("userPassword");
    sessionStorage.removeItem("bookingId");
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("details");
    sessionStorage.removeItem("hotelDetails");
    setIsLoggedIn(false);
    navigateHandler("/login");
  };

  return (
    <section>
    
      <section onClick={handleClick}>
       {window.innerWidth<=768 && ( <section className="profile-icon">
          <AccountCircleIcon color="primary" fontSize="large" />
        </section>)}
        {window.innerWidth>768 && !isLoggedIn &&  (
          <section className="profile-box">
            <AccountCircleIcon color="primary" fontSize="large"/>
            <h1>LOGIN / SIGNUP</h1>
            </section>
        )}
         {window.innerWidth>768 && isLoggedIn &&  (
          <section className="profile-box">
            <div className="login-icon">{firstletter}</div>
            <h1>{userName}</h1>
            </section>
        )}
        {window.innerWidth<=768 && isLoggedIn && <span>{userName}</span>}
      </section>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {isLoggedIn ? (
          <section>
            <MenuItem onClick={logout}>Logout</MenuItem>
            <MenuItem onClick={() => navigateHandler("/mysupport/trips")}>Trips</MenuItem>
            <MenuItem onClick={() => navigateHandler("/myProfile")}>My Profile</MenuItem>
          </section>
        ) : (
          <section>
            <MenuItem onClick={() => navigateHandler("/login")}>Login</MenuItem>
            <MenuItem onClick={() => navigateHandler("/signup")}>Sign Up</MenuItem>
          </section>
        )}
      </Menu>
    </section>
  );
};
