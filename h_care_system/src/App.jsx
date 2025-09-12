import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Technician from "./pages/Technician";
import Login from "./pages/Login";
import About_us from "./pages/About_us";
import Contact from "./pages/Contact";
import Appointment from "./pages/Appointment";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MyProfile from "./pages/MyProfile";
import MyAppointments from "./pages/MyAppointments";
import { ToastContainer, toast } from 'react-toastify';


const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <ToastContainer/>
      {/* -----------------------------------------------------------Navigation Bar------------------------------------------------------ */}
      <Navbar />

      {/* ---------------------------------------------------------Pages Routes---------------------------------------------------------- */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technician" element={<Technician />} />
        <Route path="/technicians/:speciality" element={<Technician />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about_us" element={<About_us />} />
        <Route path="/contact_us" element={<Contact />} />
        <Route path="/my_profile" element={<MyProfile/>} />
        <Route path="/my_appointment" element={<MyAppointments/>} />
        <Route path="/appointment/:tecId" element={<Appointment />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
