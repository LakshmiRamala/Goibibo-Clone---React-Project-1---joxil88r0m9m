import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BusBooking() {
  const { _id } = useParams();
  const [bus, setBus] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBusData = async () => {
      const config = {
        headers: {
          projectId: "9sa80czkq1na",
        },
      };

      try {
        const response = await axios.get(
          `https://academics.newtonschool.co/api/v1/bookingportals/bus/${_id}`,
          config
        );
        setBus(response.data.data);
        console.log(response.data.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    getBusData();
  }, [_id]);

  return (
    <main>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div >
              <h1 style={{textAlign:"center",color:"#2176d1"}}>{bus.name}</h1>
              <main>
              <section style={{display:"flex",gap:"10%",alignItems:"center",justifyContent:"center",paddingTop:"20px"}}>
            <div>
            <h2 style={{color:"#fc6203"}}>Boarding Point</h2>
            <p>{bus.departureTime}</p>
            <p>{bus.source}</p>
            </div>
            <p>{"---------->"}</p>
            <div>
            <h2 style={{color:"#fc6203"}}>Dropping Point</h2>
            <p>{bus.arrivalTime}</p>
            <p>{bus.destination}</p>
            </div>
          </section>
              <section>
          {bus && (
            <div className="seat-container">
              {Array.from({ length: bus.seats }, (_, index) => (
                <div
                  key={index + 1}
                  className={bus.available ? "availableseat" : "bookedseat"}
                  onClick={(event) => {
                    if (bus.available) {
                      const currentColor = event.target.style.backgroundColor;
                      event.target.style.backgroundColor =
                        currentColor === "green" ? "grey" : "green";
                    }
                  }}
                >
                  {index + 1}
                </div>
              ))}


            </div>

          )}
          <div className="seat-details">
            <div style={{ display: "flex" }}>
              <span>Not Available</span>
              <img src="https://banner2.cleanpng.com/20180215/tuw/kisspng-square-area-angle-pattern-transparent-shapes-cliparts-5a85f2015f1543.6114232115187276813895.jpg"
                width="40px" height="40px"
                alt="red box" />
            </div>
            <div style={{ display: "flex" }}>
              <span>Available</span>
              <img src="https://www.clker.com/cliparts/b/e/c/3/131406375432193858green%20square.png"
                width="40px" height="40px"
                alt="green box" />
            </div>
            <div style={{ display: "flex" }}>
              <span>Selected by you</span>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Grey_Square.svg/2048px-Grey_Square.svg.png"
                width="40px" height="40px"
                alt="grey box" />
            </div>
          </div>
          </section>
          
          </main>
        </div>
      )}
    </main>
  );
}
