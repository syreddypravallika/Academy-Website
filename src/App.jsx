import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PaymentPage from "./pages/PaymentPage";

function App() {

  useEffect(() => {
    // Hide scrollbar but keep scrolling functional
    document.body.style.overflowY = "scroll";  // keeps scrolling
    document.body.style.scrollbarWidth = "none"; // for Firefox
    document.body.style.msOverflowStyle = "none"; // for IE 10+
    
    // For Chrome, Safari, Opera (Webkit browsers)
    const style = document.createElement('style');
    style.innerHTML = `
      ::-webkit-scrollbar {
        width: 0px;
        background: transparent;
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <Router>
      <Navbar />

      <div style={{ minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
