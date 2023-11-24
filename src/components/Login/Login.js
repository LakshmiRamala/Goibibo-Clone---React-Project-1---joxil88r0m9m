import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import Navbar from "../Navbar/Navbar";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const { setIsLoggedIn } = useAuth();
  const { state } = useLocation();
  
  const loginUser = async (user) => {
    const config = {
      headers: {
        projectId: "9sa80czkq1na"
      }
    };
    try {
      const res = await axios.post(
        "https://academics.newtonschool.co/api/v1/bookingportals/login",
        { ...user, appType: "bookingportals" },
        config
      );
      console.log("res", res);
      const token = res.data.token;
      if (token) {
        sessionStorage.setItem("userToken", token);
        sessionStorage.setItem("userName", JSON.stringify(res.data.data.name));
        sessionStorage.setItem("userEmail", JSON.stringify(res.data.data.email));
        setIsLoggedIn(true);
        if (state) {
          navigate(state.prevPath);
        } else {
          navigate("/flights");
        }
      }
    } catch (err) {
      setMessage("Incorrect Email Id or Password");
      console.log("Error:", err);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userDetails = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    loginUser(userDetails);
  };

  // const onGoogleLoginSuccess = (response) => {
  //   const decoded = jwtDecode(response.credential);
  //   console.log(decoded);
  // };

  // const onGoogleLoginFailure = (error) => {
  //  setMessage(error);
  // };

  return (
    <div className="form-display">
      <Navbar/>
      <form className="form-container" onSubmit={handleFormSubmit}>
       
        <h1>Login</h1>
        <div className="inputFeild">
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" id="email" ref={emailRef} style={{ textTransform: "lowercase" }} />
        </div>
        <div className="inputFeild">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            ref={passwordRef}
          />
        </div>
        <div className="submitform">
          <input type="submit" value="Login" />
          <h4 className="login-message">{message}</h4>
        </div>
        {/* <GoogleLogin
          onSuccess={onGoogleLoginSuccess}
          onFailure={onGoogleLoginFailure}
        /> */}
      </form>
      </div>
    // </GoogleOAuthProvider>
  );
}
