import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import HotelCard from "./HotelCard";
import datanotfound from "../Assets/datanotfound.png";
import { useMediaQuery } from 'react-responsive';

export default function HotelSearch() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const { location } = useParams();
  const [hotellist, setHotelList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    hotelrating: 0,
    price: 0,
    searchValue: "",
  });

  const handleResetFilters = () => {
    setSelectedFilters({
      hotelrating: 0,
      price: 0,
      searchValue: "",
    });
  };
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const getHotelsData = async () => {
    const config = {
      headers: {
        projectId: "9sa80czkq1na",
      },
    };

    try {
      setLoading(true);
      const response = await axios.get(
        `https://academics.newtonschool.co/api/v1/bookingportals/hotel?search={"location":"${location}"}`,
        config
      );
      setHotelList(response.data.data.hotels);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getHotelsData();
  }, [location]);

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters({
      ...selectedFilters,
      [filterType]: value,
    });
  };

  return (
    <main>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <section>
          <div className="hotelinfo">
          {isMobile && (<main className="resposive-filters">
                <div className="menu-filter" onClick={toggleMenu}>
                  Filter
                </div>
                {isMenuOpen && (
                  <div className="filter">
                <div className="filtersbox">
              <h4>Filters</h4>
              <form>
                <p>Rating</p>
                <span>
                  <input
                    type="checkbox"
                    name="rating"
                    id="threeandhalf"
                    value={3.5}
                    checked={selectedFilters.hotelrating === 3.5}
                    onChange={() => handleFilterChange("hotelrating", 3.5)}
                  />
                  <label htmlFor="threeandhalf"> 3.5+</label>
                </span>
                <span>
                  <input
                    type="checkbox"
                    name="rating"
                    id="four"
                    value={4}
                    checked={selectedFilters.hotelrating === 4}
                    onChange={() => handleFilterChange("hotelrating", 4)}
                  />
                  <label htmlFor="four"> 4+</label>
                </span>
                <span>
                  <input
                    type="checkbox"
                    name="rating"
                    id="fourandhalf"
                    value={4.5}
                    checked={selectedFilters.hotelrating === 4.5}
                    onChange={() => handleFilterChange("hotelrating", 4.5)}
                  />
                  <label htmlFor="fourandhalf"> 4.5+</label>
                </span>
                <span>
                  <input
                    type="checkbox"
                    name="rating"
                    id="five"
                    value={5}
                    checked={selectedFilters.hotelrating === 5}
                    onChange={() => handleFilterChange("hotelrating", 5)}
                  />
                  <label htmlFor="five"> 5</label>
                </span>
              </form>
              <form>
                <p>Price</p>
                <span>
                  <input
                    type="checkbox"
                    name="price"
                    id="one"
                    value={3000}
                    checked={selectedFilters.price === 3000}
                    onChange={() => handleFilterChange("price", 3000)}
                  />
                  <label htmlFor="one"> ₹3000-₹5000</label>
                </span>
                <span>
                  <input
                    type="checkbox"
                    name="price"
                    id="two"
                    value={5000}
                    checked={selectedFilters.price === 5000}
                    onChange={() => handleFilterChange("price", 5000)}
                  />
                  <label htmlFor="two"> ₹5000-₹7000</label>
                </span>
                <span>
                  <input
                    type="checkbox"
                    name="price"
                    id="three"
                    value={7000}
                    checked={selectedFilters.price === 7000}
                    onChange={() => handleFilterChange("price", 7000)}
                  />
                  <label htmlFor="three"> ₹7000-₹9000</label>
                </span>
                <span>
                  <input
                    type="checkbox"
                    name="price"
                    id="four"
                    value={9000}
                    checked={selectedFilters.price === 9000}
                    onChange={() => handleFilterChange("price", 9000)}
                  />
                  <label htmlFor="four"> ₹9000+</label>
                </span>
                </form>
                <button onClick={handleResetFilters} className="hotel-reset-button">
                Reset filters
              </button>
          </div>
          </div>
        )}
         </main>)}
         <input
              type="text"
              id="name"
              placeholder="search hotel names"
              value={selectedFilters.searchValue}
              onChange={(e) => {
                handleFilterChange("searchValue", e.target.value);
              }}
            />
          </div>
          {!isMobile && (<><div className="filter">
            <div className="filtersbox">
              <h4>Filters</h4>
              <form>
                <p>Rating</p>
                <span>
                  <input
                    type="checkbox"
                    name="rating"
                    id="threeandhalf"
                    value={3.5}
                    checked={selectedFilters.hotelrating === 3.5}
                    onChange={() => handleFilterChange("hotelrating", 3.5)}
                  />
                  <label htmlFor="threeandhalf"> 3.5+</label>
                </span>
                <span>
                  <input
                    type="checkbox"
                    name="rating"
                    id="four"
                    value={4}
                    checked={selectedFilters.hotelrating === 4}
                    onChange={() => handleFilterChange("hotelrating", 4)}
                  />
                  <label htmlFor="four"> 4+</label>
                </span>
                <span>
                  <input
                    type="checkbox"
                    name="rating"
                    id="fourandhalf"
                    value={4.5}
                    checked={selectedFilters.hotelrating === 4.5}
                    onChange={() => handleFilterChange("hotelrating", 4.5)}
                  />
                  <label htmlFor="fourandhalf"> 4.5+</label>
                </span>
                <span>
                  <input
                    type="checkbox"
                    name="rating"
                    id="five"
                    value={5}
                    checked={selectedFilters.hotelrating === 5}
                    onChange={() => handleFilterChange("hotelrating", 5)}
                  />
                  <label htmlFor="five"> 5</label>
                </span>
              </form>
              <form>
                <p>Price</p>
                <span>
                  <input
                    type="checkbox"
                    name="price"
                    id="one"
                    value={3000}
                    checked={selectedFilters.price === 3000}
                    onChange={() => handleFilterChange("price", 3000)}
                  />
                  <label htmlFor="one"> ₹3000-₹5000</label>
                </span>
                <span>
                  <input
                    type="checkbox"
                    name="price"
                    id="two"
                    value={5000}
                    checked={selectedFilters.price === 5000}
                    onChange={() => handleFilterChange("price", 5000)}
                  />
                  <label htmlFor="two"> ₹5000-₹7000</label>
                </span>
                <span>
                  <input
                    type="checkbox"
                    name="price"
                    id="three"
                    value={7000}
                    checked={selectedFilters.price === 7000}
                    onChange={() => handleFilterChange("price", 7000)}
                  />
                  <label htmlFor="three"> ₹7000-₹9000</label>
                </span>
                <span>
                  <input
                    type="checkbox"
                    name="price"
                    id="four"
                    value={9000}
                    checked={selectedFilters.price === 9000}
                    onChange={() => handleFilterChange("price", 9000)}
                  />
                  <label htmlFor="four"> ₹9000+</label>
                </span>
                <button onClick={handleResetFilters} className="hotel-reset-button">
                Reset filters
              </button>
              </form>
          </div>
          </div>
          </>)}

          <div className="hotel-list-container">
          {hotellist.length === 0 && <img src={datanotfound} alt="data not found" style={{marginLeft:"40%",marginTop:"2%"}} height="500px"/>}

            {hotellist
              .filter((hotel) => {
                return (
                  (selectedFilters.hotelrating === 0 || hotel.rating >= selectedFilters.hotelrating) &&
                  (selectedFilters.price === 0 ||hotel.rooms.some((room) => room.price >= selectedFilters.price && room.price <= selectedFilters.price + 2000)) &&
                  (selectedFilters.searchValue === "" || hotel.name.toLowerCase().includes(selectedFilters.searchValue.toLowerCase()))
                );
              })
              .sort((a, b) => a.rating - b.rating)
              .map((hotel) => (
                <HotelCard details={hotel} key={hotel._id} />
              ))}
              </div>
        </section>
      )}
    </main>
  );
}
