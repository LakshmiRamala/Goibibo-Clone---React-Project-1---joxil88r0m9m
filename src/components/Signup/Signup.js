import axios from "axios";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";
import Navbar from "../Navbar/Navbar";

export default function SignUp() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const { setIsLoggedIn } = useAuth();

  const createUser = async (user) => {
    setLoading(true);
    try {
      const config = {
        headers: {
          projectId: "9sa80czkq1na"
        }
      };

      const res = await axios.post(
        "https://academics.newtonschool.co/api/v1/user/signup",
        { ...user, appType: "bookingportals" },
        config
      );
        console.log(res);
      const token = res.data.token;
      if (token) {
        sessionStorage.setItem("userToken", token);
        sessionStorage.setItem("userName", JSON.stringify(res.data.data.user.name));
        sessionStorage.setItem("userEmail", JSON.stringify(res.data.data.user.email));
        
        setIsLoggedIn(true); 
        navigate("/flights");
      }
    } catch (err) {
      console.error("Error:", err);
      if (err.response && err.response.data && err.response.data.message) {
        setMessage(err.response.data.message);
      } else {
        setMessage("An error occurred during signup.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userDetails = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    createUser(userDetails);
  };

  return (
    <div className="form-display">
      <Navbar/>
    <form className="form-container" onSubmit={handleFormSubmit}>
      <h1>Sign Up</h1>
      <div className="inputFeild">
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" id="name" ref={nameRef} />
      </div>
      <div className="inputFeild">
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" id="email" ref={emailRef} />
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
        <input type="submit" value="SignUp" disabled={loading} />
      </div>
      <h4>{message}</h4>
    </form>
    </div>
  );
}
