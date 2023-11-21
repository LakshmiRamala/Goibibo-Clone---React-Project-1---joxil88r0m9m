import axios from "axios";
import React, { useEffect, useState } from "react";
import Hotelroom from "./Hotelroom";

const API_URL = "https://academics.newtonschool.co/api/v1/bookingportals/hotel/";
const PROJECT_ID = "9sa80czkq1na";

const HotelDisplayer = ({ hotelId, closeModal }) => {
  const [hotels, setHotels] = useState({ images: [] });
  const [loading, setLoading] = useState(true);
  const [currentIndex, setIndex] = useState(0);

  useEffect(() => {
    const getHotelsData = async () => {
      const config = {
        headers: {
          projectId: PROJECT_ID,
        },
      };

      try {
        const response = await axios.get(`${API_URL}${hotelId}`, config);
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
    setIndex((currentIndex) =>
      currentIndex === 0 ? hotels.images.length - 1 : currentIndex - 1
    );
  }

  function handleClickNext() {
    setIndex((currentIndex) =>
      currentIndex === hotels.images.length - 1 ? 0 : currentIndex + 1
    );
  }

  return (
    <div className="modal-container">
      <main className="hotel-display-container">
        {loading && <p>Loading...</p>}
        {!loading && (
          <>
            <button className="close" onClick={() => closeModal(false)}>
              X
            </button>
            <div className="slideshow">
              <div className="slide-display-container">
                <button
                  className="prev"
                  onClick={handleClickPre}
                  disabled={currentIndex === 0}
                >
                  &#10094;
                </button>
                <img
                  className="image"
                  src={hotels.images[currentIndex]}
                  alt="hotelImage"
                />
                <button
                  className="next"
                  onClick={handleClickNext}
                  disabled={currentIndex === hotels.images.length}
                >
                  &#10095;
                </button>
              </div>
              <div className="hotelmoredetails">
                <h1 className="hoteltitle">{hotels.name}</h1>
                <p className="hotelsubtitle">{hotels.location}</p>
                <p id="hotelrating">Rating: {hotels.rating}</p>
                <p id="hotelamenities">
                  Special Benefits:{" "}
                  {hotels.amenities && hotels.amenities.join(" , ")}
                  <br />
                </p>
              </div>
            </div>
            <div className="roomcontainer">
              {hotels.rooms &&
                hotels.rooms.length > 0 &&
                hotels.rooms.map((room) => (
                  <Hotelroom
                    details={room}
                    key={room._id}
                    hotelId={hotelId}
                    hotelDetails={hotels}
                  />
                ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default HotelDisplayer;
