import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import SyncAltTwoToneIcon from '@mui/icons-material/SyncAltTwoTone';
import BusCard from "./BusCard";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import datanotfound from "../Assets/datanotfound.png";
import { useMediaQuery } from 'react-responsive';

export default function BusSearch() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const state = location.state;
  const [selectedDate, setSelectedDate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [Buslist, setBusList] = useState([]);
  const [day, setDay] = useState(state.day);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const [source, setSource] = useState(state.source);
  const [destination, setDestination] = useState(state.destination);
  const [selectedFilters, setSelectedFilters] = useState({
    sortPrice: false,
    arrival:null,
    depature:null,
    busType:null
  });

  const handleResetFilters = () => {
    setSelectedFilters({
       busType:null,
       arrival:null,
      sortPrice: false,
      depature:null
    });
  };
    
  useEffect(() => {
    getBusData();
  }, []);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

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

  const getBusData = async () => {
    const config = {
      headers: {
        projectId: "9sa80czkq1na",
      },
    };

    try {
      setLoading(true);
      const response = await axios.get(
        `https://academics.newtonschool.co/api/v1/bookingportals/bus?day=${day}&search={"source":"${source}","destination":"${destination}"}`,
        config
      );
      
     setBusList(response.data.data.buses);
    
     
  
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
    if (selectedDate) { 
      const day = selectedDate.toLocaleDateString('en-US', { weekday: 'short' });
     
  }
    getBusData();
  };

  return (
    <main>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <section>
          <div className="flight-search-container">
            <form onSubmit={handleSubmit} className="flight-search-form" style={{position:"relative"}}>
              <input
                type="text"
                id="from"
                placeholder="From..."
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
                placeholder="To...."
                onChange={(e) => setDestination(e.target.value)}
                value={destination}
              />
              <span style={{ position: "relative", display: "inline-block" }}>
                <button type="submit" id="flight-update" style={{ position: "absolute", top: "10px", right:!isMobile ? "-240px":"-99px", width: !isMobile ?"80%":"52%" }}>
                  UPDATE SEARCH
                </button>
                <DatePicker
                  selected={selectedDate}
                  onChange={date => setSelectedDate(date)}
                  minDate={new Date()}
                  placeholderText="Select Date"
                  className="datepicker"
                  popperPlacement="bottom-start"
                  style={{ height: "8px" }}
                />
              </span>
              {isMobile  && (<main className="resposive-filters">
                <div className="menu-filter" onClick={toggleMenu}>
                  Filter
                </div>
                {isMenuOpen && (
              <div className="filter">
            <div className="filtersbox">
              <h4>Filters</h4>
              <form>
                <p>Bus Type</p>
                <span>
                  <input
                    type="checkbox"
                    name="busType"
                    id="ac"
                    value={"AC"}
                    checked={selectedFilters.busType === "AC"}
                    onChange={() => handleFilterChange("busType", "AC")}
                  />
                  <label htmlFor="ac"> AC</label>
                </span>
                <span>
                  <input
                    type="checkbox"
                    name="busType"
                    id="nonac"
                    value={"Non-AC"}
                    checked={selectedFilters.busType === "Non-AC"}
                    onChange={() => handleFilterChange("busType", "Non-AC")}
                  />
                  <label htmlFor="nonac"> NON AC </label>
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
                <p>Arrival</p>
                <span>
                  <input
                    type="checkbox"
                    name="arraival-time"
                    id="before 6"
                    value={0}
                    checked={selectedFilters.arrival === 0}
                    onChange={() => handleFilterChange("arrival", 0)}
                  />
                  <label htmlFor="before 6"> Before 6AM</label>
                </span>
                <span>
                  <input
                    type="checkbox"
                    name="arraival-time"
                    id="before 12"
                    value={6}
                    checked={selectedFilters.arrival=== 6}
                    onChange={() => handleFilterChange("arrival", 6)}
                  />
                  <label htmlFor="before 12"> 6AM - 12PM</label>
                </span>
                <span>
                  <input
                    type="checkbox"
                    name="arraival-time"
                    id="before 18"
                    value={12}
                    checked={selectedFilters. arrival=== 12}
                    onChange={() => handleFilterChange("arrival", 12)}
                  />
                  <label htmlFor="before 18"> 12PM - 6PM</label>
                </span>
                <span>
                  <input
                    type="checkbox"
                    name="arraival-time"
                    id="before 24"
                    value={18}
                    checked={selectedFilters.arrival === 18}
                    onChange={() => handleFilterChange("arrival", 18)}
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
                  className="bussearch-sort"
                />
              </form>
              <button onClick={handleResetFilters} className="busfilters-button" >
                Reset filters
              </button>
            </div>
          </div>
          )}
          </main>)}
            </form>
          </div>
          {!isMobile && <> <div className="filter">
            <div className="filtersbox">
              <h4>Filters</h4>
              <form>
                <p>Bus Type</p>
                <span>
                  <input
                    type="checkbox"
                    name="busType"
                    id="ac"
                    value={"AC"}
                    checked={selectedFilters.busType === "AC"}
                    onChange={() => handleFilterChange("busType", "AC")}
                  />
                  <label htmlFor="ac"> AC</label>
                </span>
                <span>
                  <input
                    type="checkbox"
                    name="busType"
                    id="nonac"
                    value={"Non-AC"}
                    checked={selectedFilters.busType === "Non-AC"}
                    onChange={() => handleFilterChange("busType", "Non-AC")}
                  />
                  <label htmlFor="nonac"> NON AC </label>
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
                <p>Arrival</p>
                <span>
                  <input
                    type="checkbox"
                    name="arraival-time"
                    id="before 6"
                    value={0}
                    checked={selectedFilters.arrival === 0}
                    onChange={() => handleFilterChange("arrival", 0)}
                  />
                  <label htmlFor="before 6"> Before 6AM</label>
                </span>
                <span>
                  <input
                    type="checkbox"
                    name="arraival-time"
                    id="before 12"
                    value={6}
                    checked={selectedFilters.arrival=== 6}
                    onChange={() => handleFilterChange("arrival", 6)}
                  />
                  <label htmlFor="before 12"> 6AM - 12PM</label>
                </span>
                <span>
                  <input
                    type="checkbox"
                    name="arraival-time"
                    id="before 18"
                    value={12}
                    checked={selectedFilters. arrival=== 12}
                    onChange={() => handleFilterChange("arrival", 12)}
                  />
                  <label htmlFor="before 18"> 12PM - 6PM</label>
                </span>
                <span>
                  <input
                    type="checkbox"
                    name="arraival-time"
                    id="before 24"
                    value={18}
                    checked={selectedFilters.arrival === 18}
                    onChange={() => handleFilterChange("arrival", 18)}
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
                  className="bussearch-sort"
                />
              </form>
              <button onClick={handleResetFilters} className="busfilters-button" >
                Reset filters
              </button>
            </div>
          </div>
          </>}
          <div className="hotel-list-container">
          {Buslist.length === 0 && <img src={datanotfound} alt="data not found" style={{marginLeft:!isMobile?"40%":"10px",marginTop:!isMobile?"2%":"10%"}} height={!isMobile ?"500px":"400px"}  />}

          {Buslist
        .filter((bus) => {
          const BusDeparture = convertTo24HourFormat(bus.departureTime);
          const BusArrival=convertTo24HourFormat(bus.arrivalTime);
          return (
            (selectedFilters.busType === null || bus.type === selectedFilters.busType) &&
            (selectedFilters.depature === null ||
              (BusDeparture >= selectedFilters.depature &&
                BusDeparture < selectedFilters.depature + 6))&&
                  (selectedFilters.arrival === null ||
                    (BusArrival >= selectedFilters.arrival &&
                      BusArrival < selectedFilters.arrival + 6))

                
          );
        })
              .sort((a, b) => {
                if (selectedFilters.sortPrice) {
                  return a.fare - b.fare;
                }
                return 0;
              })
              .map((bus) => (
                <BusCard details={bus} key={bus._id} />
              ))}
          </div>
        </section>
      )}
    </main>
  );
}