import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useAuth } from "../provider/AuthProvider";
import { Button, Menu, MenuItem } from "@mui/material";

export const Profile = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const userName = JSON.parse(sessionStorage.getItem("userName"));

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
    setIsLoggedIn(false);
    navigateHandler("/login");
  };

  return (
    <section>
      <section onClick={handleClick}>
        <section className="profile-icon">
          <AccountCircleIcon color="primary" fontSize="large" />
        </section>
        {isLoggedIn && <span>{userName}</span>}
      </section>

      <Menu
        id="profile-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {isLoggedIn ? (
          <section>
            <MenuItem onClick={logout}>Logout</MenuItem>
            <MenuItem onClick={() => navigateHandler("/mysupport/trips")}>Trips</MenuItem>
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
