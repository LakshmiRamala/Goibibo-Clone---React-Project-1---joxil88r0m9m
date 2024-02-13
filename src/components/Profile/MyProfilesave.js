import React from "react";
import MyProfile from "./MyProfile";

export default function MyProfilesave({ details }) {
    return (
        <div>
            <h2>Personal Information</h2>
            <div className="display-container">
                <span className="details-display">
                    <h5>Mobile Number</h5>
                    {details.phone ? (
                        <p>{details.phone}</p>
                    ) : (
                        <p>-</p>
                    )
                    }
                </span>

                <span className="details-display">
                    <h5>Email ID</h5>
                    {details.email ? (
                        <p>{details.email}</p>) : (<p>-</p>)}
                </span>
                <span className="details-display">
                    <h5>First Name</h5>
                    {details.firstname ? (
                        <p>{details.firstname}</p>) :
                        (<p>-</p>)}
                </span>
                <span className="details-display">
                    <h5>Last Name</h5>{
                        details.lastname ?
                            (<p>{details.lastname}</p>) : (<p>-</p>)}
                </span>
                <span className="details-display">
                    <h5>Gender</h5>
                    {details.gender ? (
                        <p>{details.gender}</p>) : (
                        <p>-</p>
                    )}
                </span>
                <span className="details-display">
                    <h5>Date of Birth</h5>{
                        details.date ?
                            (<p>{details.date}</p>) : (<p>-</p>)}
                </span>
                <input type="submit" value="Edit" id="Editbutton" onClick={() => details.setModel(false)} />
                {!details.setModel && <MyProfile />}
            </div>
        </div>
    );
}
