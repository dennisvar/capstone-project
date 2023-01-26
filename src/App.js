import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Facilities from './components/Facilities';
import Bookings from './components/Bookings';
import Events from './components/Events';
import Maps from './components/Maps';
import Chat from './components/Chat';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
  return (
    <>
      <Header/>
      <Navbar/>
      <Router>
        <Routes>
          <Route path='/Main' element={<Main/>}/>
          <Route path='/Facilities' element={<Facilities/>}/>
          <Route path='/Bookings' element={<Bookings/>}/>
          <Route path='/Events' element={<Events/>}/>
          <Route path='/Maps' element={<Maps/>}/>
          <Route path='/Chat' element={<Chat/>}/>
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
