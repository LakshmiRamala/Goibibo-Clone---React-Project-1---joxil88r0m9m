import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useAuth } from "../Auth/AuthProvider";
import { Menu, MenuItem } from "@mui/material";

export const Profile = () => {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const userName = sessionStorage.getItem("userName") ? JSON.parse(sessionStorage.getItem("userName")).toUpperCase() : "";
  const [anchorEl, setAnchorEl] = useState(null);
  const firstletter = isLoggedIn && userName.length > 0 ? userName.charAt(0).toUpperCase() : "";

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
    sessionStorage.clear();
    setIsLoggedIn(false);
    navigateHandler("/login");
  };

  return (
    <section>
      <div onClick={handleClick}>
        {window.innerWidth <= 768 && (
          <div className="profile-icon">
            <AccountCircleIcon color="primary" fontSize="large" />
          </div>
        )}
        {window.innerWidth > 768 && !isLoggedIn && (
          <div className="profile-box">
            <AccountCircleIcon color="primary" fontSize="large" />
            <h5>LOGIN / SIGNUP</h5>
          </div>
        )}
        {window.innerWidth > 768 && isLoggedIn && (
          <div className="profile-box">
            <div className="login-icon">{firstletter}</div>
            <h1>{userName}</h1>
          </div>
        )}
        {window.innerWidth <= 768 && isLoggedIn && <span>{userName}</span>}
      </div>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {isLoggedIn ? (
          <section>
            <MenuItem onClick={logout}>Logout</MenuItem>
            <MenuItem onClick={() => navigateHandler("/mysupport/trips")}>
              Trips
            </MenuItem>
            <MenuItem onClick={() => navigateHandler("/myProfile")}>
              My Profile
            </MenuItem>
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
