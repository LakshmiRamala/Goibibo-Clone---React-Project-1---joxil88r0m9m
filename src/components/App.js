import React from 'react';
import { Routes, Route,NavLink } from 'react-router-dom';
import '../styles/App.css';
import Flights from './Flight/Flights';
import Hotels from './Hotels/Hotels';
import Trains from './Trains/Trains';
import Bus from './Bus/Bus';
import Login from './Auth/Login';
import MyTrips from './MyTrips/MyTrips';
import Navbar from './Navbar/Navbar';
import HotelSearch from './Hotels/HotelSearch';
import Signup from './Auth/Signup';
import AuthProvider from './Auth/AuthProvider';
import AuthNavigator from './Auth/AuthNavigator';
import CheckoutPage from './Hotels/CheckoutPage';
import FlightSearch from './Flight/FlightSearch';
import TrainSearch from './Trains/TrainSearch';
import BusSearch from './Bus/BusSearch';
import BusBooking from './Bus/BusBooking';
import MyProfile from './Profile/MyProfile';
import CheckoutFlightPage from './Flight/CheckoutFlightPage';
import CheckoutTrainPage from './Trains/CheckoutTrainPage';
import BusCheckout from './Bus/BusCheckout';
import HomePage from './Navbar/HomePage';
import HomeNav from './Navbar/HomeNav';
import { useMediaQuery } from 'react-responsive';


function App() {
  const isHomePage =  useMediaQuery({ maxWidth: 768 });

  return (
    <div className="App">
      <AuthProvider>
      {isHomePage && <><HomeNav/>
        <Routes>
          <Route path="/" element={<HomePage />}/>
            <Route path="/flights" element={<Flights />} />
              <Route path="/flights/:search" element={<FlightSearch />} />
              <Route path="/flights/checkout" element={<CheckoutFlightPage />} />
              <Route path="/trains/checkout" element={<CheckoutTrainPage />} />
              <Route path="/trains/:search" element={<TrainSearch />} />
              <Route path="/bus/checkout" element={<BusCheckout />} />
              <Route path="/hotels" element={<Hotels />} />
              <Route path="/trains" element={<Trains />} />
              <Route path="/bus" element={<Bus />} />
              <Route path="/bus/:search" element={<BusSearch />} />
              <Route path="/bus/book/:_id" element={<BusBooking />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/myProfile" element={<MyProfile />} />
              <Route
                path="/mysupport/trips"
                element={
                  <AuthNavigator>
                    <MyTrips />
                  </AuthNavigator>
                }
              />
              <Route path="/hotels/search/:location" element={<HotelSearch />} />
              <Route path="/checkoutPage" element={<CheckoutPage />} />
            
        </Routes> </> }
        
            {!isHomePage && <><Navbar />
            <Routes>
              <Route path="/" element={<Flights/>}/>
              <Route path="/flights" element={<Flights />} />
              <Route path="/flights/:search" element={<FlightSearch />} />
              <Route path="/flights/checkout" element={<CheckoutFlightPage />} />
              <Route path="/trains/checkout" element={<CheckoutTrainPage />} />
              <Route path="/trains/:search" element={<TrainSearch />} />
              <Route path="/bus/checkout" element={<BusCheckout />} />
              <Route path="/hotels" element={<Hotels />} />
              <Route path="/trains" element={<Trains />} />
              <Route path="/bus" element={<Bus />} />
              <Route path="/bus/:search" element={<BusSearch />} />
              <Route path="/bus/book/:_id" element={<BusBooking />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/myProfile" element={<MyProfile />} />
              <Route
                path="/mysupport/trips"
                element={
                  <AuthNavigator>
                    <MyTrips />
                  </AuthNavigator>
                }
              />
              <Route path="/hotels/search/:location" element={<HotelSearch />} />
              <Route path="/checkoutPage" element={<CheckoutPage />} />
              <Route path="*" element={<h2>Page not found!!!!</h2>} />
            </Routes>
            </>}
         
      </AuthProvider>
    </div>
  );
}

export default App;
