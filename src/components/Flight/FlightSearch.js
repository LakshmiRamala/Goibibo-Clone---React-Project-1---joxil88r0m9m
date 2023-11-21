import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import SyncAltTwoToneIcon from '@mui/icons-material/SyncAltTwoTone';
import FlightCard from "./FlightCard";

export default function HotelSearch() {
  const location = useLocation();
  const state = location.state;
  const [loading, setLoading] = useState(false);
  const [flightlist, setFlightList] = useState([]);
  const [day, setDay] = useState(state.day);
  const [source, setSource] = useState(state.source);
  const [destination, setDestination] = useState(state.destination);
  const [selectedFilters, setSelectedFilters] = useState({
    stops: null,
    sortPrice: false,
    sortDuration:false,
    depature:null
  });

  const handleResetFilters = () => {
    setSelectedFilters({
      stops: null,
      sortPrice: false,
      sortDuration:false,
      depature:null
    });
  };
    
  useEffect(() => {
    getFlightsData();
  }, []);

  const handleToggle = (e) => {
    e.preventDefault();
    setDestination(source);
    setSource(destination);
  };

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters({
      ...selectedFilters,
      [filterType]: value,
    });
  };

  const getFlightsData = async () => {
    const config = {
      headers: {
        projectId: "9sa80czkq1na",
      },
    };

    try {
      setLoading(true);
      const response = await axios.get(
        `https://academics.newtonschool.co/api/v1/bookingportals/flight?day=${day}&search={"source":"${source}","destination":"${destination}"}`,
        config
      );
      setFlightList(response.data.data.flights);
      console.log(response.data.data.flights);
     
  
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  const convertTo24HourFormat = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getFlightsData();
  };

  return (
    <main>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <section>
          <div className="flight-search-container">
            <form onSubmit={handleSubmit} className="flight-search-form">
              <input
                type="text"
                id="from"
                placeholder="Enter Source...(HYD)"
                onChange={(e) => setSource(e.target.value)}
                value={source}
              />
              <button
                id="toggle"
                onClick={handleToggle}
                style={{ backgroundColor: " #2176d1", border: "none" }}
              >
                <SyncAltTwoToneIcon />
              </button>
              <input
                type="text"
                id="to"
                placeholder="Enter Destination...(BOM)"
                onChange={(e) => setDestination(e.target.value)}
                value={destination}
              />
              <select
                name="day"
                id="day"
                onChange={(e) => setDay(e.target.value)}
                value={day}
              >
                <option value="" disabled>
                  Select day
                </option>
                <option value="Mon">Monday</option>
                <option value="Tue">Tuesday</option>
                <option value="Wed">Wednesday</option>
                <option value="Thu">Thursday</option>
                <option value="Fri">Friday</option>
                <option value="Sat">Saturday</option>
                <option value="Sun">Sunday</option>
              </select>

              <button type="submit" id="flight-update">
                UPDATE SEARCH
              </button>
            </form>
          </div>
          <div className="filter">
            <div className="filtersbox">
              <h4>Filters</h4>
              <form>
                <p>Onwards Stops</p>
                <span>
                  <input
                    type="checkbox"
                    name="stops"
                    id="zero"
                    value={0}
                    checked={selectedFilters.stops === 0}
                    onChange={() => handleFilterChange("stops", 0)}
                  />
                  <label htmlFor="zero"> Direct</label>
                </span>
                <span>
                  <input
                    type="checkbox"
                    name="stops"
                    id="one"
                    value={1}
                    checked={selectedFilters.stops === 1}
                    onChange={() => handleFilterChange("stops", 1)}
                  />
                  <label htmlFor="one"> 1 Stop</label>
                </span>
                <span>
                  <input
                    type="checkbox"
                    name="stops"
                    id="two"
                    value={2}
                    checked={selectedFilters.stops === 2}
                    onChange={() => handleFilterChange("stops", 2)}
                  />
                  <label htmlFor="two"> 2 Stops</label>
                </span>
              </form>
              <form>
                <p>Depature</p>
                <span>
                  <input
                    type="checkbox"
                    name="time"
                    id="before 6"
                    value={0}
                    checked={selectedFilters.depature === 0}
                    onChange={() => handleFilterChange("depature", 0)}
                  />
                  <label htmlFor="before 6"> Before 6AM</label>
                </span>
                <span>
                  <input
                    type="checkbox"
                    name="time"
                    id="before 12"
                    value={6}
                    checked={selectedFilters.depature === 6}
                    onChange={() => handleFilterChange("depature", 6)}
                  />
                  <label htmlFor="before 12"> 6AM - 12PM</label>
                </span>
                <span>
                  <input
                    type="checkbox"
                    name="time"
                    id="before 18"
                    value={12}
                    checked={selectedFilters.depature === 12}
                    onChange={() => handleFilterChange("depature", 12)}
                  />
                  <label htmlFor="before 18"> 12PM - 6PM</label>
                </span>
                <span>
                  <input
                    type="checkbox"
                    name="time"
                    id="before 24"
                    value={18}
                    checked={selectedFilters.depature === 18}
                    onChange={() => handleFilterChange("depature", 18)}
                  />
                  <label htmlFor="before 24"> After 6PM</label>
                </span>
              </form>
              <form>
                <p>Sort based on Price(Cheapest)</p>
                <input
                  type="button"
                  id="price"
                  name="price"
                  onClick={() =>
                    handleFilterChange("sortPrice", !selectedFilters.sortPrice)
                  }
                  value="Sort by Price"
                  className="flight-price-filter"
                 
                />
              </form>

              
              <form>
                <p>Sort based on Duration(Quickest)</p>
                <input
                  type="button"
                  id="duration"
                  name="duration"
                  onClick={() =>
                    handleFilterChange(
                      "sortDuration",
                      !selectedFilters.sortDuration
                    )
                  }
                  value="Sort by duration"
                 className="flight-price-filter"
                />
              </form>
              
              <button onClick={handleResetFilters} className="filight-filter-reset">
                Reset filters
              </button>
            </div>
          </div>
          <div className="hotel-list-container">
          {flightlist
        .filter((flight) => {
          const flightDeparture = convertTo24HourFormat(flight.departureTime);
          return (
            (selectedFilters.stops === null || flight.stops === selectedFilters.stops) &&
            (selectedFilters.depature === null ||
              (flightDeparture >= selectedFilters.depature &&
                flightDeparture < selectedFilters.depature + 6))
          );
        })
              .sort((a, b) => {
                if (selectedFilters.sortPrice) {
                  return a.ticketPrice - b.ticketPrice;
                }
                return 0;
              })
              .sort((a, b) => {
                if (selectedFilters.sortDuration) {
                  return a.duration - b.duration;
                  
                }
                return 0;
              })
              .map((flight) => (
                <FlightCard details={flight} key={flight._id} flightId={flight._id}/>
              ))}
          </div>
        </section>
      )}
    </main>
  );
}