import { Routes,Route } from "react-router-dom";
import "../styles/App.css";
import Flights from "./Flight/Flights";
import Hotels from "./Hotels/Hotels";
import Trains from "./Trains/Trains";
import Bus from "./Bus/Bus";
import Login from "./Login/Login";
import MyTrips from "./MyTrips/MyTrips";
import Navbar from "./Navbar/Navbar";
import HotelSearch from "./Hotels/HotelSearch";
import Signup from "./Signup/Signup";
import AuthProvider from "./provider/AuthProvider";
import AuthNavigator from "./navigator/AuthNavigator";
import CheckoutPage from "./checkout/CheckoutPage";
import FlightSearch from "./Flight/FlightSearch";
import TrainSearch from "./Trains/TrainSearch";
import BusSearch from "./Bus/BusSearch";
import BusBooking from "./Bus/BusBooking";



function App() {

  return <div className="App">
    <AuthProvider>
<Navbar/>
<Routes>

  <Route path="/flights" element={<Flights/>}/>
  <Route path="/flights/:search" element={<FlightSearch/>}/>
  <Route path="/trains/:search" element={<TrainSearch/>}/>
  <Route path="/hotels" element={<Hotels/>}/>
  <Route path="/trains" element={<Trains/>}/>
  <Route path="/bus" element={<Bus/>}/>
  <Route path="/bus/:search" element={<BusSearch/>}/>
  <Route path="/bus/book/:_id" element={<BusBooking/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/signup" element={<Signup/>}/>
  <Route path="/mysupport/trips" element={<AuthNavigator><MyTrips/></AuthNavigator>}/>
  <Route path="/hotels/search/:location" element={<HotelSearch/>}/>
  <Route path="/checkoutPage" element={<CheckoutPage/>}/>
  <Route path="*" element={<h2>Page not found!!!!</h2>}/>
</Routes>
</AuthProvider>
    </div>;
}
  
export default App;
