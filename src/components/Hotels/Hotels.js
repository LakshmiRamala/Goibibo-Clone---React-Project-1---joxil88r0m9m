import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import hoteladd from "../Assets/hoteladd.avif";
import hoteladd2 from "../Assets/hoteladd2.avif";
import hoteladd1 from "../Assets/hoteladd1.jpg";

export default function Hotels() {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    if(location){
    navigate(`/hotels/search/${location}`);
    }
    else{
      alert("Please Provide location!!!");
    }
    }

  return (
    <>
   {window.innerWidth<768 &&  <div className="hotel">
      <h2 className="heading">Book Hotels & Homestays</h2>
      <form className="details" onSubmit={handlesubmit}>
        <div className="location">
          <span id="hotellocation">
            <input
              type="text"
              name="city"
              placeholder="Enter City....(Hyderbad)"
              onChange={(e) => setLocation(e.target.value)}
              style={{textTransform:"uppercase"}}
            />
          </span>
        </div>
        <div id="searchhotel">
          <button type="submit" id="searchhotels" style={{width:"50%"}}>
            Search Hotels
          </button>
        </div>
      </form>
    </div>}
    {
      window.innerWidth>=768&& (
        <div style={{display:"flex"}}>
         
        <div className="newhotel" style={{display:"flex",paddingLeft:"70px"}}>
          <section>
          <h2 className="newheading">Book Hotels & Homestays</h2>
      <form className="details" onSubmit={handlesubmit} style={{width:"500px",height:"300px",}} >
        <section>
      <section className="radio-button">
                    <div className="single-button selected">
                        <input type="radio" id="india" defaultChecked />
                        <label htmlFor="india">India</label>
                    </div>
                    <div className="single-button" style={{ cursor: "not-allowed" }}>
                        <input type="radio" id="international" checked={false} />
                        <label htmlFor="international">International</label>
                    </div>
                    </section>
        <div className="location">
          <span id="hotellocation">
            <input
              type="text"
              name="city"
              placeholder="Enter City....(Hyderbad)"
              onChange={(e) => setLocation(e.target.value)}
              style={{textTransform:"uppercase",width:"70%"}}
            />
          </span>
        </div>
        <div style={{textAlign:"left",marginTop:"20px"}}>
        <h4 style={{color:"grey"}}>Guests & Rooms</h4>
        <h3 style={{color:"black"}}>1 Adult | 1 Room</h3>
        </div>
        <div id="searchhotel">
          <button type="submit" id="searchhotels" style={{width:"50%",margin:"12%",padding:"16px"}}>
            Search Hotels
          </button>
        </div>
        </section>
        
      </form>
   <img src={hoteladd1} alt="hoteladd" width="180%" style={{marginTop:"40px",marginLeft:"220px"}} height="200px" />
   </section>
   <img src={hoteladd} alt="hoteladd" width="380px" height="240px" style={{marginTop:"80px",marginLeft:"100px"}}/>
        </div>
       
        <img src={hoteladd2} alt="hoteladd" width="380px" height="240px" style={{marginTop:"80px",marginLeft:"100px"}}/>
        </div>
      )
    }
    </>
  );
}

