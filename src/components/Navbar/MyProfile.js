import React, { useRef, useState } from "react";
import MyProfilesave from "./MyProfilesave";
import { green } from "@mui/material/colors";

export default function MyProfile() {
  const ref = useRef();

  const userName = JSON.parse(sessionStorage.getItem("userName"));
  const letter = userName ? userName.charAt(0).toUpperCase() : "";
  const userEmail = JSON.parse(sessionStorage.getItem("userEmail"));
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState(userEmail);
  const [firstname, setFirstName] = useState(userName);
  const [lastname, setLastName] = useState("");
  const [model, setModel] = useState(false);
  const [gender, setGender] = useState(null);
  const [date, setDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setModel(!model);
  };

  return (
    <div className="main-user">
      <h2>My Profile</h2>
      <div className="user-profile-details">
        <div className="user-image">
          <p>{letter}</p>
        </div>
        <section>
          <h1>{userName}</h1>
          <p>{userEmail}</p>
        </section>
      </div>
      <div className="personal-info">
        {!model && (
          <form onSubmit={handleSubmit}>
            <h2>Personal Information</h2>
            <div className="personal-data">
               <input type="tel" placeholder="Enter your phone number" id="phone"
                name="phone" pattern="[0-9]{10}"   value={phone} onChange={(e)=>setPhone(e.target.value)}/>
    
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="personal-data">
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="Enter first name"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Enter last name"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="personal-data">
              <section onChange={(e) => setGender(e.target.value)}>
                <label htmlFor="gender">Gender</label>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  checked={gender === "male"}
                />
                <label htmlFor="male">Male</label>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  checked={gender === "female"}
                />
                <label htmlFor="female">Female</label>
              </section>
              <input
                type="text"
                id="dob"
                ref={ref}
                placeholder="Enter date of birth"
                value={date}
                onFocus={() => (ref.current.type = "date")}
                onBlur={() => (ref.current.type = "text")}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <input type="submit" value="Save" id="savebutton" />
          </form>
        )}
        {model && (
          <MyProfilesave
            details={{ phone, email, firstname, lastname, gender, date, setModel }}
          />
        )}
      </div>
    </div>
  );
}
