import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HotelDisplayer from "./HotelDisplayer";

export default function HotelCard({ details }) {
  const { images, name, location, rating, _id } = details;
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = () => {
    setModalOpen(true);
  }

  return (
    <main>
      <div className="hotelcard" onClick={openModal}>
        <span>
          <img src={images[0]} width={300} height={240} alt={name} />
        </span>
        <span style={{ textAlign: "center" }}>
          <h2 style={{ color: "orange", fontSize: "28px" }}>{name}</h2>
          <h3 style={{ color: "blue" }}>{location}</h3>
          <h2>{rating}/5</h2>
        </span>
      </div>

      {modalOpen && (
        <HotelDisplayer hotelId={_id} closeModal={() => setModalOpen(false)} />
      )}
    </main>
  );
}
