import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Hotelroom from "./Hotelroom";

export default function HotelDisplayer({ hotelId, closeModal }) {
  const [hotels, setHotels] = useState({ images: [] });
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const getHotelsData = async () => {
      const config = {
        headers: {
          projectId: "9sa80czkq1na",
        },
      };

      try {
        const response = await axios.get(
          `https://academics.newtonschool.co/api/v1/bookingportals/hotel/${hotelId}`,
          config
        );
        setHotels(response.data.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    getHotelsData();
  }, [hotelId]);

  function handleClickPre() {
    setCurrentImageIndex((currentIndex) =>
      currentIndex === 0 ? hotels.images.length - 1 : currentIndex - 1
    );
  }

  function handleClickNext() {
    setCurrentImageIndex((currentIndex) =>
      currentIndex === hotels.images.length - 1 ? 0 : currentIndex + 1
    );
  }

  return (
    <div className="modal-container">
      <main className="hotel-display-container">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="content">
            <div style={{ borderRadius: "20px" }}>
              <h1 className="hoteltitle">{hotels.name}</h1>
              <p className="hotelsubtitle">{hotels.location}</p>
              <div
                className="slideshow"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "1%",
                  alignItems: "center",
                }}
              >
                <section>
                <NavLink
                  to="#"
                  className="prev"
                  style={{ textDecoration: "none" }}
                  onClick={handleClickPre}
                >
                  &#10094;
                </NavLink>
                <div>
                  <img
                    className="image"
                    alt="Slideshow"
                    src={hotels.images[currentImageIndex]}
                    width={600}
                    height={400}
                    style={{ borderRadius: "25px", marginLeft: "2%" }}
                  />
                </div>
                <NavLink
                  to="#"
                  className="next"
                  style={{ textDecoration: "none" }}
                  onClick={handleClickNext}
                >
                  &#10095;
                </NavLink>
                <div className="hotelmoredetails">
                  <p id="hotelrating">Rating: {hotels.rating}</p>
                  <p id="hotelamenities">
                    Special Benefits: {hotels.amenities && hotels.amenities.join(" , ")}
                    <br />
                  </p>
                </div>
                </section>
                <div className="roomcontainer">
                  {hotels.rooms &&
                    hotels.rooms.length > 0 &&
                    hotels.rooms.map((room) => {
                      return <Hotelroom details={room} key={room._id} hotelId={hotelId} hotelDetails={hotels}/>;
                    })}
                </div>
              </div>
              
            </div>
              <div className="close" onClick={closeModal}>
                <span>x</span>
                </div>
          </div>
        )}

      </main>
    </div>
  );
}
