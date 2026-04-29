import React, { useState } from "react";
import "./Contact.css";
import axios from "axios";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !query.trim()) {
      setMessage("Please fill all fields");
      return;
    }

    axios
      .post("http://localhost:5000/api/contact", {
        name,
        email,
        message: query,
      })
      .then((res) => {
        setMessage(res.data.message);
        setName("");
        setEmail("");
        setQuery("");
      })
      .catch(() => {
        setMessage("Error submitting query. Please try again.");
      });
  };

  return (
    <div className="contact-page">
      <div className="contact-layout">

        {/* LEFT SIDE */}
        <div className="contact-left">

          <div className="contact-card">
            <h2>Contact Information</h2>

            <p><span>Email:</span> edueducation@gmail.com</p>
            <p><span>Phone:</span> +91 98765 43210</p>

            <p>
              <span>Address:</span> 2nd Floor, Tech Plaza,
              Jubilee Hills, Hyderabad,
              Telangana - 500033
            </p>

            <p><span>Institute Hours:</span> Mon - Sat (9 AM - 7 PM)</p>
          </div>

          {/* Social Icons */}
          <div className="contact-card">
            <h2>Connect With Us</h2>

            <div className="social-icons">
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* FAQ */}
          <div className="contact-card">
            <h2>FAQ</h2>

            <p>
              <strong>Q:</strong> Do you provide placements? <br />
              <strong>A:</strong> Yes, we provide placement assistance and interview training.
            </p>

            <p>
              <strong>Q:</strong> Do you provide online classes? <br />
              <strong>A:</strong> Yes, online and offline classes are available.
            </p>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">

          <div className="contact-form-container">
            <h2>Send Us Query</h2>

            <form onSubmit={handleSubmit} className="contact-form">

              <label>Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label>Your Query</label>
              <textarea
                placeholder="Write your query here"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              ></textarea>

              <button type="submit" className="contact-submit-btn">
                Submit
              </button>

              {message && <p className="form-message">{message}</p>}

            </form>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Contact;