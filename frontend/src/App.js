import React from 'react';
import EventList from './pages/EventList';
import FacilityList from './pages/FacilityList';
import Home from './pages/Home';
import ParkList from './pages/ParkList';
import ParkMap from './pages/ParkMap';
import BookingPage from './pages/BookingPage'
import ChatForum from './pages/ChatForum';
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/parklist' element={<ParkList />} />
        <Route path='/eventlist' element={<EventList />} />
        <Route path='/facilityList' element={<FacilityList />} />
        <Route path='/parkmap' element={<ParkMap />} />
        <Route path='/bookingpage' element={<BookingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
