// src/App.jsx
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import ColorShades from "./components/ColorShades/ColorShades";
import Calculator from "./components/Calculator/Calculator";
import GetQuota from "./components/GetQuota/GetQuota";
import Contact from "./components/Contact/Contact";
import PowderCoating from "./components/Services/PowderCoating";
import PvdCoating from "./components/Services/PvdCoating";
import WoodenCoating from "./components/Services/WoodenCoating";
import ScrollToTop from "./Utils/ScrollToTop";

export default function App() {
  const [isQuotaOpen, setIsQuotaOpen] = useState(false);

  const openQuota = () => setIsQuotaOpen(true);
  const closeQuota = () => setIsQuotaOpen(false);

  return (
    <>
      <Navbar openQuota={openQuota} />

      {/* Scroll to top on route change */}
      <ScrollToTop />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home openQuota={openQuota} />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/powder-coating" element={<PowderCoating />} />
          <Route path="/services/wooden-coating" element={<WoodenCoating />} />
          <Route path="/services/pvd-coating" element={<PvdCoating />} />
          <Route path="/colorshades" element={<ColorShades />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer openQuota={openQuota} />

      {isQuotaOpen && <GetQuota closeQuota={closeQuota} />}
    </>
  );
}
